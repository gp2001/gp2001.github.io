# Language Switcher - How to Add Translations

## Current Implementation

The language switcher allows users to toggle between Dutch (NL) and English (EN) versions of your resume.

## How It Works

1. **Language Toggle Button**: Located in the header next to social icons
2. **Automatic Detection**: Remembers user's language preference in browser localStorage
3. **Default Language**: Dutch (NL)

## Currently Translated Sections

- ✅ About Me / Over mij
- ✅ Job Title
- ✅ Section Titles (Projects, Work Experience, Education, Certificates, Interests)
- ✅ Interests content

## How to Add More Translations

### Option 1: Update JavaScript File

Edit `assets/js/language-switcher.js` and add new translations to the `translations` object:

```javascript
const translations = {
  nl: {
    new_key: "Nederlandse tekst",
    // ...
  },
  en: {
    new_key: "English text",
    // ...
  }
};
```

### Option 2: Add data-i18n Attribute

In your HTML/Jekyll files, add the `data-i18n` attribute:

```html
<h3 data-i18n="section_title">Default Title</h3>
```

Then add the translation in `language-switcher.js`:

```javascript
nl: {
  section_title: "Nederlandse Titel"
},
en: {
  section_title: "English Title"
}
```

## Project Content Translation

For translating project descriptions, you have two options:

### Option 1: Separate Config Files (Recommended for full translation)

Create two config files:
- `_config.nl.yml` (Dutch)
- `_config.en.yml` (English)

Use Jekyll's build command:
```bash
jekyll build --config _config.nl.yml
jekyll build --config _config.en.yml --destination _site/en
```

### Option 2: JavaScript Translation (Current approach)

Currently implemented for:
- Section titles
- About section
- Interests section
- Job title

For full project content translation, you would need to extend the JavaScript to handle all project descriptions.

## Files Modified

1. `assets/js/language-switcher.js` - Main translation logic
2. `assets/css/language-switcher.css` - Styling for language toggle
3. `_includes/head.html` - Added script and CSS links
4. `_includes/about.html` - Added data-i18n attributes
5. `_includes/header.html` - Added data-i18n for job title
6. `_includes/section-text.html` - Added data-i18n-section attribute
7. `_layouts/default.html` - Added data-i18n for section titles

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

## Persistence

The selected language is saved in `localStorage` and persists across page visits.

## Testing

1. Visit your website
2. Look for NL/EN buttons in the header (next to social icons)
3. Click to switch languages
4. Refresh page - your choice should be remembered
