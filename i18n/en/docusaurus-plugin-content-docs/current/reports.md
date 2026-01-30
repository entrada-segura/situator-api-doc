# Reports

Listing of authorized/denied access records and event occurrences.

> **Required permission:** User with profile authorized to query reports (usually administrators and supervisors).

## Access Report

**Endpoint:** `POST /api/accounts/{accountId}/reports/accesses`

or

**Endpoint:** `POST /api/reports/accesses`

## Query Filters

```json
{
  "selectedAccounts": [1000, 1100],
  "dateFrom": "2020-09-04T10:00:00Z",
  "dateTo": "2020-11-04T10:00:00Z",
  "aptoDepto": "Marketing",
  "selectedPeople": [12, 567],
  "selectedPersonTypes": [2],
  "selectedPersonProfiles": [1],
  "selectedZones": [1],
  "selectedDoors": [
    { "doorId": 0, "serverId": 12 }
  ],
  "selectedUnits": [4],
  "selectedVehicles": [2],
  "selectedSituations": [1, 2],
  "selectedUsers": [5, 8],
  "selectedResponsibles": [4, 8],
  "selectedOpeningTypes": [0],
  "timeFrom": "10:00",
  "timeTo": "18:00",
  "limit": 300
}
```

## Filter Descriptions

| Filter | Description |
|--------|-------------|
| `selectedAccounts` | Array of accountId |
| `dateFrom/dateTo` | Period (format: yyyy-mm-ddThh:mm:ssZ) |
| `aptoDepto` | Apartment, block or department |
| `selectedPeople` | Array of personId |
| `selectedPersonTypes` | 0=none, 1=employee, 2=resident, 3=visitor, 4=service provider |
| `selectedPersonProfiles` | Array of access profile IDs |
| `selectedZones` | Array of zoneId |
| `selectedDoors` | Array of objects with serverId and doorId |
| `selectedUnits` | Array of unitId |
| `selectedVehicles` | Array of vehicleId |
| `selectedSituations` | 0=entry authorized, 1=exit authorized, 2=entry denied, 3=exit denied, 4=entry duress, 5=exit duress |
| `selectedUsers` | Array of userId |
| `selectedResponsibles` | Array of responsible personId |
| `selectedOpeningTypes` | Opening types (see table below) |
| `timeFrom/timeTo` | Time (format: hh:mm:ss) |
| `limit` | Maximum quantity (default: 10,000) |

## Opening Types (selectedOpeningTypes)

| Value | Description |
|-------|-------------|
| 0 | None |
| 1 | Fingerprint |
| 2 | Card |
| 3 | Password |
| 4 | Remote |
| 5 | QR Code |
| 6 | Virtual key |
| 7 | Remote opening |
| 8 | Button |
| 9 | Facial |
| 10 | Fingerprint and card |
| 11 | Card and password |
| 12 | Card, fingerprint and password |
| 13 | Fingerprint and password |
| 14 | Passive tag |

## Access Detail

**Endpoint:** `GET /api/accounts/{accountId}/reports/accesses/{id}`
