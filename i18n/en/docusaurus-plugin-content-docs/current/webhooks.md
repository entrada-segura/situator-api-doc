# Webhooks

Webhooks are HTTP endpoints that integrators implement to receive real-time notifications of Situator events.

## Use Cases

- **Access events:** resident entry/exit, visitor entry
- **Occurrences:** intercom, panic, door forced, door left open
- **People registration:** notify creation, editing or deletion

## Important Considerations

- Situator **does not store** events to be sent
- **No retransmission** on failure
- If buffer reaches **100 events**, new events are **discarded**
- For complex integrations, use message processing tool (RabbitMQ, AmazonMQ)

## Configuration Flow

### 1. Create Endpoint in Integrator

The integrator must create an HTTP `POST` endpoint to receive events. Suggestion: `/api/situator/events`

### 2. Register Webhook

**Endpoint:** `POST /api/webhooks`

```json
{
  "active": true,
  "name": "Integrator XYZ",
  "token": "6R7zvBFrjAheqw5L",
  "description": "Webhook integration example",
  "url": "https://integrator.com/api/situator/events"
}
```

### 3. Register Doors (for access events)

**List doors:** `GET /api/webhooks/{webhookId}/doors`

**Register:** `PUT /api/webhooks/{webhookId}/doors`

```json
{
  "doors": [
    { "serverId": 1001, "doorId": 1 },
    { "serverId": 1002, "doorId": 1 }
  ]
}
```

### 4. Register Occurrences

**List events:** `GET /api/webhooks/{webhookId}/events`

**Register:** `PUT /api/webhooks/{webhookId}/events`

```json
{
  "events": [
    { "eventId": 11 },
    { "eventId": 12 }
  ]
}
```

## Received Event Types

### Access Event (`type: "access"`)

```json
{
  "type": "access",
  "dateTime": "2019-02-15T17:21:48.1201-02:00",
  "id": 1891,
  "accountId": 1000,
  "zoneId": 1001,
  "serverId": 1000,
  "doorId": 1,
  "personId": 1,
  "direction": 1,
  "authorized": true,
  "openingType": 7,
  "duress": false,
  "vehicleId": null,
  "visitorId": null,
  "credential": {
    "number": 123,
    "cardType": 1,
    "value": 12345,
    "wiegand26": "...",
    "wiegand34": "...",
    "code": "..."
  }
}
```

**`direction` values:** 0=None, 1=Entry, 2=Exit

**`openingType` values:**

| Value | Description |
|-------|-------------|
| 0 | None |
| 1 | Fingerprint |
| 2 | Card |
| 3 | Password |
| 4 | Control |
| 5 | QrCode |
| 6 | VirtualKey |
| 7 | RemoteOpening |
| 8 | ButtonHole |
| 9 | Facial |
| 10 | FingerprintAndCard |
| 11 | CardAndPassword |
| 12 | CardAndFingerprintAndPassword |
| 13 | FingerprintAndPassword |
| 14 | PassiveTag |

### Occurrence Event (`type: "occurrence"`)

```json
{
  "type": "occurrence",
  "dateTime": "...",
  "subtype": 1,
  "id": 123,
  "accountId": 1000,
  "eventId": 11,
  "zoneId": 1001,
  "personId": null,
  "visitorId": null
}
```

### Person Event (`type: "person"`)

```json
{
  "type": "person",
  "dateTime": "...",
  "subtype": 1,
  "accountId": 1000,
  "personId": 31
}
```

## All Event Types

| type | Description |
|------|-------------|
| `access` | Access event |
| `occurrence` | Occurrence |
| `person` | Person registration |
| `scheduling` | Visit scheduling |
| `visitorScheduling` | Visitor in scheduling |
| `personCredencial` | Credential-person association |
| `personUnit` | Person-unit association |
| `personZones` | Person-zone association |
| `personAccess` | Person access data |
| `credential` | Credential |
| `unit` | Unit |
| `serverResource` | Server resource |
| `fingerprint` | Fingerprint biometrics |
| `imageAccesses` | Facial biometrics |
| `personProfile` | Access profile |
| `zone` | Zone |
| `vehicle` | Vehicle |
| `personVehicle` | Person-vehicle association |

**`subtype` values:** 0=None, 1=Created, 2=Changed/Incremented, 3=Deleted
