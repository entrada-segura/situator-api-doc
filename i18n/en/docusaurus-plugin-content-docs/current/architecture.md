# Solution Architecture

Situator API uses **REST** technology, with HTTP methods to create, read, update and delete data.

## HTTP Methods

| Method | Function |
|--------|----------|
| `GET` | Query existing data |
| `POST` | Insert new data |
| `PUT` | Update existing data |
| `DELETE` | Delete existing data |

## Request URL

```
http://[server-address]:[port]/api/[endpoint]
```

**Example:** `http://192.168.0.109:8080/api/login`

## HTTP Status

| Type | First Digit | Examples |
|------|-------------|----------|
| Success | 2 | 200 OK, 201 Created, 204 No content |
| Redirect | 3 | 301 Moved |
| Client error | 4 | 400 Bad request, 401 Unauthorized, 403 Not permitted, 404 Not found |
| Server error | 5 | 500 Internal server error, 502 Bad gateway, 504 Gateway timeout |

## Swagger Documentation

Access the data model structure via URI `/api/help/index` on the Situator server.
