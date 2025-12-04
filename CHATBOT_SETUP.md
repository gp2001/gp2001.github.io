# Azure OpenAI Resume Chatbot - Setup Guide

## Overview
This chatbot allows visitors to ask questions about your resume using GPT-4 via Azure OpenAI with Entra ID authentication. The system consists of:
- **Frontend**: JavaScript widget on your GitHub Pages site
- **Backend**: Azure Function with Azure OpenAI integration

## Architecture

```
Visitor Browser → Chatbot UI → Azure Function → Azure OpenAI (GPT-4) → Response
                                     ↓
                              Entra ID Auth
```

## Prerequisites

1. **Azure OpenAI Access**
   - Azure OpenAI resource with GPT-4 deployment
   - Entra ID authentication configured
   - Deployment name (e.g., "gpt-4")

2. **Azure Account**
   - Active Azure subscription
   - Permissions to create Azure Functions
   - Permissions to assign Entra ID roles

3. **Development Tools**
   - Azure Functions Core Tools
   - Python 3.9+
   - VS Code with Azure Functions extension (recommended)

## Part 1: Frontend Setup (Already Done)

The following files have been created in your repository:

### Files Created:
- `assets/js/chatbot.js` - Main chatbot logic
- `assets/css/chatbot.css` - Chatbot styling
- `_includes/head.html` - Updated with chatbot references

### Features:
✅ Popup chat widget (bottom-right corner)
✅ Bilingual support (Dutch/English)
✅ Resume context extraction
✅ Chat history persistence
✅ Responsive design with dark mode
✅ Typing indicators

### Frontend Configuration:
Edit `assets/js/chatbot.js` and update line 7:
```javascript
apiEndpoint: 'YOUR_AZURE_FUNCTION_ENDPOINT'
```

Replace with your Azure Function URL (after Part 2 deployment).

## Part 2: Azure Function Backend Setup

### Step 1: Create Azure Function App

#### Option A: Using Azure Portal
1. Go to [Azure Portal](https://portal.azure.com)
2. Create a new **Function App**:
   - **Basics**:
     - Resource Group: Create new or use existing
     - Function App name: `resume-chatbot-function` (must be globally unique)
     - Runtime stack: **Python**
     - Version: **3.9** or higher
     - Region: Choose closest to your users
     - Operating System: **Linux**
     - Plan type: **Consumption (Serverless)**
   
   - **Storage**:
     - Create new storage account (auto-generated name)
   
   - **Networking**: Default settings
   
   - **Monitoring**: Enable Application Insights (recommended)

3. Click **Review + Create**, then **Create**

#### Option B: Using Azure CLI
```bash
# Login
az login

# Create resource group
az group create --name resume-chatbot-rg --location westeurope

# Create storage account
az storage account create --name resumechatbotstorage --resource-group resume-chatbot-rg --location westeurope --sku Standard_LRS

# Create function app
az functionapp create --name resume-chatbot-function --resource-group resume-chatbot-rg --storage-account resumechatbotstorage --consumption-plan-location westeurope --runtime python --runtime-version 3.9 --functions-version 4 --os-type Linux
```

### Step 2: Configure Entra ID Authentication

#### Enable Managed Identity:
1. In Azure Portal, go to your Function App
2. Navigate to **Identity** → **System assigned**
3. Turn **Status** to **On**
4. Click **Save** (note the Object ID)

#### Grant Azure OpenAI Access:
1. Go to your **Azure OpenAI resource**
2. Navigate to **Access control (IAM)**
3. Click **Add** → **Add role assignment**
4. Select **Cognitive Services OpenAI User** role
5. Click **Next**
6. Click **Select members**
7. Search for your Function App name
8. Select it and click **Select**
9. Click **Review + assign**

### Step 3: Deploy Function Code

#### Method 1: VS Code (Recommended)

1. **Install Extensions**:
   - Azure Functions extension for VS Code
   - Azure Account extension

2. **Deploy**:
   - Open VS Code
   - Open the `azure-function` folder
   - Press `F1` and select "Azure Functions: Deploy to Function App"
   - Select your subscription
   - Select your function app
   - Confirm deployment

#### Method 2: Azure Functions Core Tools

```bash
# Navigate to azure-function directory
cd azure-function

# Deploy
func azure functionapp publish resume-chatbot-function
```

#### Method 3: GitHub Actions (Automated)

Create `.github/workflows/deploy-function.yml`:
```yaml
name: Deploy Azure Function

on:
  push:
    branches: [main]
    paths:
      - 'azure-function/**'
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
      
      - name: Install dependencies
        run: |
          cd azure-function
          pip install -r requirements.txt
      
      - name: Deploy to Azure Functions
        uses: Azure/functions-action@v1
        with:
          app-name: resume-chatbot-function
          package: azure-function
          publish-profile: ${{ secrets.AZURE_FUNCTIONAPP_PUBLISH_PROFILE }}
```

To get publish profile:
1. Go to Function App in Azure Portal
2. Click **Get publish profile** (top menu)
3. Copy the downloaded XML content
4. Add as GitHub secret: `AZURE_FUNCTIONAPP_PUBLISH_PROFILE`

### Step 4: Configure Function Settings

1. Go to Function App in Azure Portal
2. Navigate to **Configuration** → **Application settings**
3. Add the following settings:

```
AZURE_OPENAI_ENDPOINT = https://YOUR_RESOURCE_NAME.openai.azure.com/
AZURE_OPENAI_DEPLOYMENT = gpt-4
AZURE_OPENAI_API_VERSION = 2024-02-15-preview
```

4. Click **Save**

**Update function_app.py** to use these settings:
```python
import os

AZURE_OPENAI_ENDPOINT = os.environ.get("AZURE_OPENAI_ENDPOINT")
AZURE_OPENAI_DEPLOYMENT = os.environ.get("AZURE_OPENAI_DEPLOYMENT", "gpt-4")
AZURE_OPENAI_API_VERSION = os.environ.get("AZURE_OPENAI_API_VERSION", "2024-02-15-preview")
```

### Step 5: Enable CORS

1. In Function App, go to **CORS** (under API section)
2. Add your GitHub Pages URL:
   ```
   https://gp2001.github.io
   ```
3. For testing, you can temporarily add `*` (remove in production)
4. Click **Save**

### Step 6: Get Function URL

1. Go to your Function App
2. Navigate to **Functions**
3. Click on the **chat** function
4. Click **Get Function URL**
5. Copy the URL (should look like):
   ```
   https://resume-chatbot-function.azurewebsites.net/api/chat
   ```

### Step 7: Update Frontend Configuration

Edit `assets/js/chatbot.js`:
```javascript
const CHATBOT_CONFIG = {
  apiEndpoint: 'https://resume-chatbot-function.azurewebsites.net/api/chat',
  // ... rest of config
};
```

## Part 3: Testing

### Local Testing (Backend)

1. **Install Azure Functions Core Tools**:
   ```bash
   npm install -g azure-functions-core-tools@4 --unsafe-perm true
   ```

2. **Create local.settings.json**:
   ```json
   {
     "IsEncrypted": false,
     "Values": {
       "AzureWebJobsStorage": "",
       "FUNCTIONS_WORKER_RUNTIME": "python",
       "AZURE_OPENAI_ENDPOINT": "https://YOUR_RESOURCE.openai.azure.com/",
       "AZURE_OPENAI_DEPLOYMENT": "gpt-4",
       "AZURE_OPENAI_API_VERSION": "2024-02-15-preview"
     }
   }
   ```

3. **Run locally**:
   ```bash
   cd azure-function
   func start
   ```

4. **Test with curl**:
   ```bash
   curl -X POST http://localhost:7071/api/chat \
     -H "Content-Type: application/json" \
     -d '{
       "message": "What is Gabriel's experience?",
       "context": {"about": "Experienced developer..."},
       "history": [],
       "language": "en"
     }'
   ```

### Frontend Testing

1. **Push changes to GitHub**:
   ```bash
   git add .
   git commit -m "Add AI chatbot with Azure OpenAI"
   git push
   ```

2. **Visit your site**: https://gp2001.github.io

3. **Click the chat button** (bottom-right corner)

4. **Test scenarios**:
   - Ask: "What projects has Gabriel worked on?"
   - Ask: "What is Gabriel's education background?"
   - Ask: "Tell me about Gabriel's experience at ICT Group"
   - Switch to English and ask questions
   - Check chat history persistence (refresh page)

## Part 4: Monitoring & Optimization

### Monitor Usage

1. **Application Insights**:
   - Go to Function App → **Application Insights**
   - View request logs, errors, performance

2. **Cost Monitoring**:
   - Azure Functions: Consumption plan (pay per execution)
   - Azure OpenAI: Pay per token
   - Monitor in Azure Portal → Cost Management

### Optimize Costs

1. **Limit context size**: The function already truncates descriptions
2. **Implement rate limiting**: Add to function code if needed
3. **Cache common questions**: Consider Redis for frequent queries
4. **Adjust max_tokens**: Currently set to 800, reduce if responses are too long

### Security Best Practices

1. **API Key Protection**: ✅ Using Entra ID (no API keys exposed)
2. **CORS Configuration**: ✅ Restrict to your domain only
3. **Rate Limiting**: Consider Azure API Management for production
4. **Content Moderation**: OpenAI has built-in content filtering
5. **Monitoring**: Enable Application Insights alerts

## Troubleshooting

### Common Issues

**1. "403 Forbidden" error**
- Check Entra ID role assignment
- Verify Function App managed identity is enabled
- Ensure OpenAI resource has correct permissions

**2. "CORS error"**
- Add GitHub Pages URL to Function App CORS settings
- Check CORS headers in function response

**3. "Chatbot not appearing"**
- Check browser console for JavaScript errors
- Verify chatbot.js is loaded (check Network tab)
- Ensure CSS file is loaded

**4. "No response from chatbot"**
- Check Function App logs in Azure Portal
- Verify API endpoint URL in chatbot.js
- Test function URL directly with curl

**5. "Token limit exceeded"**
- Reduce context in resume extraction
- Truncate long descriptions more aggressively
- Lower max_tokens parameter

### Debug Mode

Enable console logging in `chatbot.js`:
```javascript
// Add at top of file
const DEBUG = true;

// Then add throughout:
if (DEBUG) console.log('Resume context:', resumeContext);
```

## Cost Estimates

### Azure Functions (Consumption Plan)
- First 1M executions/month: **Free**
- After: $0.20 per million executions
- Example: 1000 questions/month = **~$0**

### Azure OpenAI
- GPT-4 Turbo: ~$0.01 per 1K input tokens, ~$0.03 per 1K output tokens
- Average conversation: ~2K input + 500 output tokens = ~$0.035
- 100 conversations/month = **~$3.50**
- 500 conversations/month = **~$17.50**

**Estimated Total**: $4-20/month depending on usage

## Maintenance

### Regular Tasks
- Monitor Application Insights for errors
- Review costs monthly
- Update OpenAI API version when new versions release
- Test chatbot functionality after site updates

### Updates
- To update function: Redeploy using VS Code or CLI
- To update frontend: Commit and push to GitHub
- To update GPT-4 model: Change deployment name in settings

## Support

For issues or questions:
1. Check Azure Function logs in Portal
2. Review Application Insights
3. Test API endpoint directly
4. Check browser console for frontend errors

## Next Steps

After basic setup:
1. **Analytics**: Track what users ask
2. **Improvements**: Fine-tune system prompt based on common questions
3. **Features**: Add voice input, suggested questions
4. **Scale**: Consider dedicated hosting for high traffic

## Security Notes

⚠️ **Important**:
- Never commit `local.settings.json` to git
- Keep Azure OpenAI endpoint in Function App settings only
- Regularly review IAM permissions
- Monitor for unusual usage patterns
- Consider adding authentication for production use

## Files Reference

```
gp2001.github.io/
├── assets/
│   ├── js/
│   │   ├── chatbot.js              # Frontend chatbot logic
│   │   ├── language-switcher.js    # Language detection
│   │   └── english-content.js      # Translations
│   └── css/
│       └── chatbot.css             # Chatbot styling
│
├── azure-function/                  # Backend (deploy separately)
│   ├── function_app.py             # Main function code
│   ├── requirements.txt            # Python dependencies
│   └── host.json                   # Function configuration
│
└── _includes/
    └── head.html                   # Updated with chatbot scripts
```

---

**Setup Complete!** 🎉

Your resume chatbot is now ready. Visitors can ask questions and get intelligent responses about your experience, projects, and skills powered by GPT-4.
