# Generate Occurrences (Remote Events)

The API allows generating events remotely that will appear as occurrences for operators in Situator.

## Create Remote Event

**Endpoint:** `POST /api/remote-events`

> **Required permission:** The user profile must have the "Events API" permission.

**Simple example:**

```json
{
  "accountCode": "1000",
  "eventCode": "CONNECTION_LOSS"
}
```

**Complete example:**

```json
{
  "accountCode": "string",
  "zoneCode": "string",
  "eventCode": "string",
  "priority": 0,
  "join": true,
  "latitude": 0,
  "longitude": 0,
  "description": "string",
  "message": "string",
  "person": {
    "id": 0,
    "integrationId": 0
  },
  "callId": "string",
  "payload": "string",
  "visitorId": 0,
  "automaticClose": true,
  "silent": false
}
```

## Event Fields

| Field | Description | Required |
|-------|-------------|----------|
| `accountCode` | Account code in Situator | Yes* |
| `eventCode` | Event code in Situator | Yes |
| `zoneCode` | Zone code (default: general zone) | No |
| `priority` | 0=Low, 1=Medium, 2=High, 3=Critical | No |
| `join` | Group similar occurrences (default: true) | No |
| `latitude/longitude` | Map location | No |
| `description` | Event description | No |
| `message` | Text in history log | No |
| `person` | Person sending the event (id or integrationId) | No |
| `callId` | ID for telephony integration | No |
| `payload` | Data for HTTP GET action | No |
| `visitorId` | Pre-visitor for visit scheduling | No |
| `automaticClose` | Closes grouped occurrence | No |
| `silent` | Occurrence only in reports (no screen) | No |

*Required for users not linked to an account

## Event Codes Reference

### Pre-registered Events

| Event | Code |
|-------|------|
| Correctly opened | `CORRECTLY_OPENED` |
| Unexpectedly opened | `UNEXPECTEDLY_OPENED` |
| Remotely opened | `REMOTELY_OPENED` |
| Alarm armed | `R401` |
| Forced alarm armed | `R456` |
| Auto armed alarm | `R403` |
| Alarm disarmed | `E401` |
| Assistance | `AUXILIO` |
| Virtual barrier | `VIRTUAL_BARRIER` |
| Virtual fence | `VIRTUAL_FENCE` |
| Zone short circuit | `E142` |
| Motion detection | `MOTION_DETECTION` |
| Zone trigger | `E130` |
| Double pass | `DOUBLE_PASS` |
| Emergency | `EMERGENCIA` |
| Medical emergency | `EMERGENCIA_MEDICA` / `E100` |
| Silent emergency | `E121` |
| Assisted entry | `ENTRADA_ASSISTIDA` |
| Entry authorized | `ENTRY_AUTHORIZED` |
| Entry under duress | `ENTRY_DURESS` |
| Entry denied | `ENTRY_DENIED` |
| IO event | `IO` |
| Battery failure | `E302` |
| Communication failure | `E350` |
| Power failure | `E301` |
| Auxiliary power failure | `E300` |
| Expander module failure | `E143` |
| Siren failure | `E321` |
| Bus voltage failure | `E333` |
| Properly closed | `CLOSED_PROPERLY` |
| Remotely closed | `REMOTELY_CLOSED` |
| Fire | `E110` |
| Intercom activated | `INTERFONE_ACIONADO` |
| Scenery change | `SCENERY_CHANGE` |
| Abandoned object | `ABANDONED_OBJECT` |
| Object removed | `OBJECT_REMOVED` |
| Image obstruction | `OBSTRUCTION` |
| Panic | `PANICO` |
| Partition armed | `R402` |
| Partition disarmed | `E402` |
| Pass | `PASS` |
| Connection loss | `CONNECTION_LOSS` |
| Signal loss | `SIGNAL_LOSS` |
| Door left open | `DOOR_LEFT_OPEN` |
| Door smashed | `DOOR_SMASHED` |
| Short circuit restore | `R142` |
| Battery restore | `R302` |
| Siren restore | `R321` |
| Tamper restore | `R144` |
| Zone restore | `R130` |
| Power restore | `R301` |
| Auxiliary power restore | `R300` |
| Expander module restore | `R143` |
| Bus voltage restore | `R333` |
| Exit authorized | `EXIT_AUTHORIZED` |
| Exit under duress | `EXIT_DURESS` |
| Exit denied | `EXIT_DENIED` |
| Tamper violation | `E144` |
| Zone inhibited | `E570` |
