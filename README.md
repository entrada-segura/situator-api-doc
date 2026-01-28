# Situator API Documentation

Documentation for the Situator API - an access control and security monitoring system.

## Structure

```
situator-api-doc/
├── scalar.config.json    # Scalar docs configuration
├── openapi.json          # OpenAPI/Swagger specification
├── docs/                 # Guide pages
│   ├── introduction.md
│   ├── architecture.md
│   ├── authentication.md
│   ├── people.md
│   ├── access-permissions.md
│   ├── zones.md
│   ├── credentials.md
│   ├── remote-events.md
│   ├── visit-scheduling.md
│   ├── synchronization.md
│   ├── webhooks.md
│   ├── reports.md
│   └── glossary.md
└── README.md
```

## Deployment

### Option 1: Scalar Docs Platform (Recommended)

1. Connect this repository to [Scalar](https://scalar.com)
2. Configure GitHub Sync in Scalar dashboard
3. Your docs will be available at `https://situator-api.apidocumentation.com`

### Option 2: GitHub Pages (Manual)

For a static GitHub Pages deployment, create an `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Situator API</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/svg+xml" href="https://scalar.com/favicon.svg" />
</head>
<body>
  <script
    id="api-reference"
    data-url="./openapi.json"
    data-configuration='{"theme": "purple"}'
  ></script>
  <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
</body>
</html>
```

Then enable GitHub Pages in repository settings.

## Links

- [Situator API](https://situator.entradasegura.com.br)
- [Confluence Documentation](https://seventh.atlassian.net/wiki/spaces/SITAPI/overview)
