# Situator API Documentation

Documentação bilíngue (PT-BR/EN) da API Situator para controle de acesso e monitoramento de segurança.

Bilingual documentation (PT-BR/EN) for the Situator access control and security monitoring API.

## 🌐 Live Site

**https://entrada-segura.github.io/situator-api-doc/**

## Features

- 📖 **Guides** - Step-by-step documentation in Portuguese and English
- 🔧 **API Reference** - Interactive OpenAPI documentation with Scalar
- 🌍 **i18n** - Full internationalization (PT-BR and English)
- 🔍 **Search** - Full-text search across all documentation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Structure

```
situator-api-doc/
├── docs/                    # Portuguese documentation (default)
├── i18n/en/                 # English translations
├── static/openapi.json      # OpenAPI specification
├── src/pages/
│   └── api-reference.tsx    # Scalar API Reference page
└── docusaurus.config.ts     # Docusaurus configuration
```

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main` branch.

## Links

- [Situator](https://situator.entradasegura.com.br)
- [Confluence Documentation](https://seventh.atlassian.net/wiki/spaces/SITAPI/overview)
