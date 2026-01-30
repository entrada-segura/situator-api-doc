# Zone Management

Zones identify internal areas of a customer's account where video, access or automation resources are allocated (e.g., Entrance Hall, Party Room, Garage, Gym).

## List Zones

**Endpoint:** `GET /api/zones`

**Optional parameters:**
- `activeOnly` (default: true)
- `publicOnly` (default: false)
- `accountId`

**Response:**

```json
{
  "zones": [
    {
      "id": 1002,
      "accountId": 1002,
      "accountName": "XYZ Condominium",
      "name": "Lobby",
      "code": 100,
      "description": "Lobby - Main access to the condominium",
      "active": true,
      "generalZone": false,
      "restrict": true,
      "layoutId": 173,
      "layoutName": "Lobby"
    }
  ]
}
```

## Create Zone

**Endpoint:** `POST /api/accounts/{accountId}/zones`

```json
{
  "name": "Lobby",
  "code": "100",
  "description": "Lobby - Main access to the condominium",
  "active": true,
  "restrict": true,
  "layoutId": 173
}
```

| Field | Description |
|-------|-------------|
| `restrict` | Zone accessible only by people registered by administrators |
| `layoutId` | DGuard VMS image layout for automatic opening on occurrences |

## Edit Zone

**Endpoint:** `PUT /api/accounts/{accountId}/zones/{zoneId}`
