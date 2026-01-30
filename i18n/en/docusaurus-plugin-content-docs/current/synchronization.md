# People Synchronization

Process for registering/updating people in devices individually.

## Partial Synchronization

### How It Works

1. The integrating system sends person registration information to the API
2. Situator updates all devices the person has access permission to
3. Devices that will receive the information are those in the person's access zones

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/wizard/accounts/{accountId}/people/{personId}` | Retrieve person |
| POST | `/api/wizard/accounts/{accountId}/people` | Include person |
| PUT | `/api/wizard/accounts/{accountId}/people/{personId}` | Update person |

### Object Structure

```json
{
  "person": {
    "id": 1,
    "name": "Test Person 01",
    "cpf": "050.018.610-39",
    "document": "456789",
    "phone": "(48) 99853621",
    "email": "test@company.com",
    "active": true,
    "personType": 1,
    "personImage": { "portrait": "...", "icon": "...", "avatar": "...", "guid": "..." },
    "documentImage": { "portrait": "...", "guid": "..." },
    "gender": 1,
    "birthday": "1988-01-11T00:00:00.000",
    "duressPassword": "help",
    "department": "Development",
    "responsible": true,
    "accessPermission": true
  },
  "personAccount": {
    "accountId": 1000,
    "validity": null,
    "pin": 1,
    "block": null,
    "apartment": null,
    "password": "",
    "startDate": null
  },
  "credentials": [...],
  "vehicles": [...],
  "personZones": [...],
  "fingerprints": [...],
  "units": [],
  "faceAccess": null
}
```

### Finger IDs for Biometrics

| ID | Finger |
|----|--------|
| 0 | Left pinky |
| 1 | Left ring |
| 2 | Left middle |
| 3 | Left index |
| 4 | Left thumb |
| 5 | Right thumb |
| 6 | Right index |
| 7 | Right middle |
| 8 | Right ring |
| 9 | Right pinky |

### Behavior on Update (PUT)

| Field | Value | Behavior |
|-------|-------|----------|
| `personAccount` | `null` or `{}` or omitted | Keeps existing values |
| `credentials` | `null` or omitted | Keeps existing values |
| `credentials` | `[]` (empty) | Removes all credentials |
| `vehicles` | `null` or omitted | Keeps existing values |
| `vehicles` | `[]` (empty) | Removes all vehicles |
| `personZones` | `null` or omitted | Keeps existing values |
| `personZones` | `[]` (empty) | Removes access from all zones |
| `fingerprints` | `null` or `[]` or omitted | Keeps existing values |
| `units` | `null` or omitted | Keeps existing values |
| `units` | `[]` (empty) | Removes all units |

---

## Simplified Method

Simplified API for partial synchronization to access devices.

### Limitations

**Supported equipment:**
- Only devices with modern facial recognition from manufacturers: Intelbras, Hikvision and ZKTeco (except MultiBio700, MultiBio800H and VF680)

**What syncs:**
- Person data
- Access data (permissions)
- Photos
- Activated/deactivated people
- Biometrics (fingerprints)

**What does NOT sync:**
- PINs (except main pin)
- Cards/Credentials
- Deleted people
- Deleted credentials
- Guard booth IP
- Schedules

### Endpoint

**Endpoint:** `PUT /api/accounts/{accountId}/people/{personId}/synchronize`

> **Required permission:** "System settings → Integrations → Access"

**Response:** Only error or success status (no return data).

> **Note:** The service only triggers the update process. If device synchronization failures occur, they will only be identified by analyzing the system log.
