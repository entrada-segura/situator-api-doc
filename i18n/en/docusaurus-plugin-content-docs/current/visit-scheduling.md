# Visit Scheduling

Feature for scheduling visitor entries, defining dates and guest lists.

## List Visit Schedules

**Endpoint:** `GET /api/accounts/{accountId}/visitor-schedulings`

**Parameters:**
- `startDate` - Start date (format dd/MM/yyyy)
- `endDate` - End date (format dd/MM/yyyy)

## Create Schedule

**Endpoint:** `POST /api/accounts/{accountId}/visitor-schedulings`

```json
{
  "occasion": "Renovations and maintenance",
  "startDate": "19/03/2021",
  "endDate": "19/10/2021",
  "startTime": "09:00",
  "endTime": "18:00",
  "observation": "Limit circulation in main areas",
  "frequencyType": 1,
  "canEnterAccompanied": true,
  "canEnterNight": false,
  "notifyArrival": true,
  "sunday": false,
  "monday": true,
  "tuesday": true,
  "wednesday": true,
  "thursday": true,
  "friday": true,
  "saturday": false,
  "active": true,
  "commonArea": {
    "id": 1
  }
}
```

## Schedule Fields

| Field | Description |
|-------|-------------|
| `occasion` | Event purpose description |
| `startDate/endDate` | Schedule period |
| `startTime/endTime` | Allowed times |
| `frequencyType` | 0=single, 1=temporary, 2=permanent |
| `canEnterAccompanied` | Other people can enter with guests |
| `canEnterNight` | Guests can enter at night |
| `notifyArrival` | Notify when guests arrive |
| `sunday...saturday` | Allowed days of week |
| `commonArea` | Common area identifier |
| `environment` | Event location (required if no common area) |
| `zones` | Array of access zone IDs |
| `visitedId` | Person responsible for authorizing entry |

## Guests as Visitor Person

**List:** `GET /api/accounts/{accountId}/people-schedulings/{schedulingId}/visitors`

**Add:** `POST /api/accounts/{accountId}/people-schedulings/{schedulingId}/people-visitors`

```json
{
  "peopleIds": [1, 10, 500, 80527]
}
```

## Guests as Pre-visitor

**List:** `GET /api/accounts/{accountId}/visitor-schedulings/{schedulingId}/visitors`

**Create:** `POST /api/accounts/{accountId}/visitor-schedulings/{schedulingId}/visitors`

```json
{
  "name": "John Smith",
  "typeId": 3,
  "document": "987654321",
  "email": "john@test.com"
}
```

## Responsible People

**Endpoint:** `GET /api/accounts/{accountId}/people-responsibles`

Returns list of people configured as responsible who can authorize visitor entry.
