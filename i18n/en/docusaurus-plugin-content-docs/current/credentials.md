# Credential Management

A person's credentials are used to grant access to locations through devices configured in zones.

## Credential Types

| cardType | Description |
|----------|-------------|
| 0 | None |
| 1 | HID Card |
| 3 | Passive Tag |
| 4 | Active Tag |
| 5 | Nice Remote |
| 6 | Intelbras Remote |
| 7 | uTech QRCode |
| 8 | uTech Remote |

## Code Formats

| Format | Description |
|--------|-------------|
| **Wiegand 26** | Two numeric groups (3 digits + 5 digits) separated by comma/space |
| **Wiegand 34** | 8 hexadecimal characters |
| **Decimal** | 10 numeric characters |
| **Serial** | 5-byte hexadecimal (10 digits) |
| **AbaTrack** | Serial converted to decimal with 14 digits |

## List Credentials

**Endpoint:** `GET /api/accounts/{accountId}/credentials`

```json
{
  "credentials": [
    {
      "id": 35,
      "duress": false,
      "personId": 168,
      "personName": "John Doe",
      "number": 1,
      "cardType": 3,
      "value": 4660,
      "wiegand26": null,
      "wiegand34": null,
      "code": "0x00001234"
    }
  ]
}
```

## Create Credential

**Endpoint:** `POST /api/accounts/{accountId}/credentials`

```json
{
  "quantity": 10,
  "number": 6475657,
  "cardType": 1,
  "value": 4660,
  "count": 0,
  "timestamp": 0
}
```

> If `quantity` is provided, registration happens sequentially in batch.

## Other Endpoints

- `GET /api/accounts/{accountId}/credentials/next-number` - Next available number
- `GET /api/accounts/{accountId}/credentials/available` - Unassigned credentials
- `DELETE /api/accounts/{accountId}/credentials/{credentialId}` - Delete credential
