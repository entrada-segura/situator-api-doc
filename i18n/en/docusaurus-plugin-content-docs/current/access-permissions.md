# Access Permissions

A person in Situator can be registered with or without access permission. People with permission are authorized to open doors in allowed zones and are synchronized to access devices.

## Query Access Permission

**Endpoint:** `GET /api/accounts/{accountId}/people/{personId}/access`

**Response:**

```json
{
  "access": {
    "pin": 270,
    "apartment": null,
    "block": null,
    "administrator": false,
    "startDate": null,
    "validity": null,
    "password": null,
    "active": true,
    "type": 1
  }
}
```

## Access Fields

| Field | Description |
|-------|-------------|
| `pin` | Access PIN code (automatically assigned if null) |
| `type` | 0=none, 1=employee, 2=resident, 3=visitor, 4=service provider |
| `startDate` | Access start date |
| `validity` | Validity period (required for visitors/service providers) |
| `administrator` | Privilege to configure access devices |
| `apartment` | Numeric access code (LinearHCS, Intelbras Remote) |
| `block` | Numeric access code (LinearHCS) |
| `password` | Device password (ZKTeco: 5 digits, Linear: 6, Remote: 3, uTech: 4) |

## Create/Edit/Delete Permission

- **Create:** `POST /api/accounts/{accountId}/people/{personId}/access`
- **Edit:** `PUT /api/accounts/{accountId}/people/{personId}/access`
- **Delete:** `DELETE /api/accounts/{accountId}/people/{personId}/access`
