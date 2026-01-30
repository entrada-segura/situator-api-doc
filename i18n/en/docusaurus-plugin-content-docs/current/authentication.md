# Authentication (Login)

There are two authentication methods that allow you to use the other integration services.

## Authentication Methods

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/login` | PUT | Creates authentication cookie with username and password |
| `/api/login/from-token` | GET | Creates authentication cookie from fixed token |
| `/api/logoff` | GET | Removes the authentication cookie |
| `/api/current-user` | GET | Returns current user data |

## Session Cookie

In both cases, a **`Seventh.Auth` session Cookie** will be returned with the encrypted authentication Token. The Cookie must be used in subsequent requests, otherwise a `401 - Unauthorized` code will be returned.

## Username and Password Token

**Endpoint:** `PUT /api/login`

```json
{
  "userName": "string",
  "password": "string",
  "rememberMe": true,
  "accountId": 0
}
```

**Fields:**
- `username`: User name in Situator *(Required)*
- `password`: User password in Situator *(Required)*
- `rememberMe`: Remember user on next authentication *(Optional)*
- `accountId`: Account ID for user login with Person profile *(Optional)*

> The token expires when the user changes their password.

## Fixed Token

**Endpoint:** `GET /api/login/from-token`

The fixed token is generated during user registration and **does not expire**. Ideal when you don't want to keep password information in the integrating application.

## Logoff

**Endpoint:** `GET /api/logoff`

Removes the cookie from the browser. The token remains valid for future authentications (no Cookie or Token expiration).
