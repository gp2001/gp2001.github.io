"""
Azure Function for Resume Chatbot
Integrates with Azure OpenAI GPT-4 using Entra ID authentication
"""

import azure.functions as func
import json
import logging
from azure.identity import DefaultAzureCredential
from openai import AzureOpenAI

# Configuration - Update these values
AZURE_OPENAI_ENDPOINT = "https://YOUR_RESOURCE_NAME.openai.azure.com/"
AZURE_OPENAI_DEPLOYMENT = "gpt-4"  # Your GPT-4 deployment name
AZURE_OPENAI_API_VERSION = "2024-02-15-preview"

# Initialize OpenAI client with Entra ID authentication
credential = DefaultAzureCredential()
client = AzureOpenAI(
    azure_endpoint=AZURE_OPENAI_ENDPOINT,
    azure_ad_token_provider=lambda: credential.get_token("https://cognitiveservices.azure.com/.default").token,
    api_version=AZURE_OPENAI_API_VERSION
)

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="chat", methods=["POST"])
def chat(req: func.HttpRequest) -> func.HttpResponse:
    """
    Handle chat requests from the frontend
    """
    logging.info('Processing chat request')

    # Enable CORS
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }

    # Handle preflight request
    if req.method == 'OPTIONS':
        return func.HttpResponse(status_code=200, headers=headers)

    try:
        # Parse request body
        req_body = req.get_json()
        user_message = req_body.get('message', '')
        resume_context = req_body.get('context', {})
        chat_history = req_body.get('history', [])
        language = req_body.get('language', 'nl')

        if not user_message:
            return func.HttpResponse(
                json.dumps({'error': 'No message provided'}),
                status_code=400,
                headers=headers
            )

        # Build system prompt
        system_prompt = build_system_prompt(resume_context, language)

        # Build messages for API
        messages = [
            {"role": "system", "content": system_prompt}
        ]

        # Add recent chat history for context
        for msg in chat_history[-6:]:  # Last 3 exchanges
            role = "user" if msg['sender'] == 'user' else "assistant"
            messages.append({"role": role, "content": msg['text']})

        # Add current user message
        messages.append({"role": "user", "content": user_message})

        # Call Azure OpenAI
        response = client.chat.completions.create(
            model=AZURE_OPENAI_DEPLOYMENT,
            messages=messages,
            temperature=0.7,
            max_tokens=800,
            top_p=0.95,
            frequency_penalty=0,
            presence_penalty=0
        )

        # Extract response
        bot_response = response.choices[0].message.content

        return func.HttpResponse(
            json.dumps({
                'response': bot_response,
                'usage': {
                    'prompt_tokens': response.usage.prompt_tokens,
                    'completion_tokens': response.usage.completion_tokens,
                    'total_tokens': response.usage.total_tokens
                }
            }),
            status_code=200,
            headers=headers
        )

    except Exception as e:
        logging.error(f'Error processing chat: {str(e)}')
        return func.HttpResponse(
            json.dumps({
                'error': 'An error occurred processing your request',
                'details': str(e)
            }),
            status_code=500,
            headers=headers
        )


def build_system_prompt(context, language):
    """
    Build a comprehensive system prompt with resume context
    """
    
    if language == 'en':
        base_prompt = """You are an AI assistant for Gabriel Shamon's professional resume website. 
Your role is to help visitors learn about Gabriel's experience, skills, projects, and qualifications.

Be professional, friendly, and concise. Answer questions based ONLY on the resume information provided below. 
If asked about something not in the resume, politely say you don't have that information.

Key guidelines:
- Be conversational and helpful
- Highlight relevant experience and skills
- Provide specific examples from projects when relevant
- Keep responses concise (2-3 paragraphs maximum)
- If asked about availability or contact, mention checking the website for contact information
"""
    else:
        base_prompt = """Je bent een AI-assistent voor de professionele CV-website van Gabriel Shamon.
Je rol is om bezoekers te helpen meer te weten te komen over Gabriel's ervaring, vaardigheden, projecten en kwalificaties.

Wees professioneel, vriendelijk en beknopt. Beantwoord vragen ALLEEN op basis van de onderstaande CV-informatie.
Als je wordt gevraagd naar iets dat niet in het CV staat, zeg dan beleefd dat je die informatie niet hebt.

Belangrijke richtlijnen:
- Wees gespreksmatig en behulpzaam
- Benadruk relevante ervaring en vaardigheden
- Geef specifieke voorbeelden uit projecten wanneer relevant
- Houd antwoorden beknopt (maximaal 2-3 alinea's)
- Bij vragen over beschikbaarheid of contact, verwijs naar de contactinformatie op de website
"""

    # Add resume context
    context_str = "\n\n=== RESUME INFORMATION ===\n\n"
    
    # About section
    if context.get('about'):
        context_str += f"ABOUT:\n{context['about']}\n\n"
    
    # Projects
    if context.get('projects'):
        context_str += "PROJECTS:\n"
        for project in context['projects'][:8]:  # Limit to avoid token overflow
            context_str += f"- {project.get('title', '')}\n"
            if project.get('subtitle'):
                context_str += f"  Role: {project['subtitle']}\n"
            if project.get('description'):
                # Truncate long descriptions
                desc = project['description'][:500]
                context_str += f"  Description: {desc}\n"
        context_str += "\n"
    
    # Work Experience
    if context.get('experience'):
        context_str += "WORK EXPERIENCE:\n"
        for exp in context['experience'][:8]:
            context_str += f"- {exp.get('title', '')} at {exp.get('company', '')}\n"
            if exp.get('description'):
                desc = exp['description'][:300]
                context_str += f"  {desc}\n"
        context_str += "\n"
    
    # Education
    if context.get('education'):
        context_str += "EDUCATION:\n"
        for edu in context['education']:
            context_str += f"- {edu.get('degree', '')} - {edu.get('institution', '')}\n"
            if edu.get('description'):
                context_str += f"  {edu['description'][:200]}\n"
        context_str += "\n"
    
    # Interests
    if context.get('interests'):
        context_str += f"INTERESTS:\n{context['interests']}\n\n"
    
    return base_prompt + context_str


def build_requirements_txt():
    """
    Requirements for the Azure Function
    Save this as requirements.txt in your function app
    """
    return """azure-functions
openai>=1.0.0
azure-identity>=1.12.0
"""


# For local testing
if __name__ == "__main__":
    # Test the system prompt building
    test_context = {
        'name': 'Gabriel Shamon',
        'about': 'Experienced IT professional...',
        'projects': [
            {'title': 'Test Project', 'subtitle': 'Developer', 'description': 'Built a system...'}
        ]
    }
    
    prompt = build_system_prompt(test_context, 'nl')
    print(prompt)
