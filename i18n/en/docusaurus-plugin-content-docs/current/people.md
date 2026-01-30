# People Management

Each account in Situator contains a list of registered people with personal information and customized access settings.

## List People

**Endpoint:** `GET /api/accounts/{accountId}/people`

**Pagination filters:**
- `pagination.count` - total records to return
- `pagination.itemsPerPage` - number of records per page
- `pagination.currentPage` - current page
- `pagination.filters.name` - search by names, departments or units
- `pagination.orderedBy` - sort field
- `pagination.ascending` - sort type
- `pagination.filters.active` - only active or inactive

**Example response:**

```json
{
  "people": [
    {
      "id": 4654,
      "name": "John Doe",
      "active": false,
      "phone": "119985211",
      "email": "john@email.com",
      "personType": 2,
      "imported": false,
      "responsible": true,
      "units": []
    }
  ],
  "pagination": {
    "itemsPerPage": 0,
    "currentPage": 0,
    "count": 2,
    "pages": 0
  }
}
```

## Create Person

**Endpoint:** `POST /api/accounts/{accountId}/people`

```json
{
  "name": "Jane Doe",
  "active": true,
  "gender": 2,
  "cpf": "129.920.900-93",
  "document": "44545454",
  "email": "jane@company.com",
  "personType": 1,
  "phone": "98766543",
  "phoneType": 1,
  "department": "Commercial",
  "observation": "Contractor",
  "birthday": "1987-01-09T00:00:00",
  "company": "XYZ CO LTD",
  "duressPassword": "help",
  "responsible": true,
  "imported": false,
  "accessPermission": true
}
```

## Person Fields

| Field | Description | Values |
|-------|-------------|--------|
| `personType` | Person type | 0=none, 1=employee, 2=resident, 3=visitor, 4=service provider |
| `gender` | Gender | 0=none, 1=male, 2=female |
| `phoneType` | Phone type | 0=none, 1=mobile, 2=residential, 3=commercial, 4=extension |
| `responsible` | Can authorize visitor entry | boolean |
| `accessPermission` | Will have permissions to open doors | boolean |
| `personProfileId` | Zone access profile | integer |
| `unitId` | Housing unit identifier | integer |
| `duressPassword` | Duress word | string |
| `integrationId` | Field reserved for integration | integer |

## Image Endpoints

- `PUT /api/accounts/{accountId}/people/{personId}/image` - ID photo
- `PUT /api/accounts/{accountId}/people/{personId}/document/image` - Document photo

## Edit/Delete Person

- **Edit:** `PUT /api/accounts/{accountId}/people/{personId}`
- **Delete:** `DELETE /api/accounts/{accountId}/people/{personId}`
