# Glossary

| Term | Definition |
|------|------------|
| **REST API** | Set of services provided by the server through HTTP protocol |
| **Credential** | A card, remote, fingerprint, facial biometric, active tag, passive tag or QRCode |
| **Endpoint** | An HTTP address in the REST API |
| **Events** | Configurable models of everything that can happen in the system. An event occurrence can generate an occurrence |
| **Access events** | Entry Authorized, Entry Denied, Entry Duress, Exit Authorized, Exit Denied, Exit Duress |
| **Integrator** | System integrated with Situator |
| **HTTP Method** | Request method supported by HTTP protocol (GET, POST, PUT, DELETE) |
| **Occurrence** | A fact that happened, the record of an event |
| **GUID/UUID** | Globally or universally unique identifier - string with hexadecimal characters separated by hyphens |

---

## Quick Endpoint Reference

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| PUT | `/api/login` | Login with user/password |
| GET | `/api/login/from-token` | Login with fixed token |
| GET | `/api/logoff` | Logout |
| GET | `/api/current-user` | Current user |

### People

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/accounts/{accountId}/people` | List people |
| POST | `/api/accounts/{accountId}/people` | Create person |
| PUT | `/api/accounts/{accountId}/people/{personId}` | Edit person |
| DELETE | `/api/accounts/{accountId}/people/{personId}` | Delete person |
| PUT | `/api/accounts/{accountId}/people/{personId}/image` | ID photo |
| PUT | `/api/accounts/{accountId}/people/{personId}/document/image` | Document photo |

### Access Permissions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/accounts/{accountId}/people/{personId}/access` | Query permission |
| POST | `/api/accounts/{accountId}/people/{personId}/access` | Create permission |
| PUT | `/api/accounts/{accountId}/people/{personId}/access` | Edit permission |
| DELETE | `/api/accounts/{accountId}/people/{personId}/access` | Delete permission |

### Zones

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/zones` | List zones |
| POST | `/api/accounts/{accountId}/zones` | Create zone |
| PUT | `/api/accounts/{accountId}/zones/{zoneId}` | Edit zone |

### Credentials

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/accounts/{accountId}/credentials` | List credentials |
| POST | `/api/accounts/{accountId}/credentials` | Create credential |
| DELETE | `/api/accounts/{accountId}/credentials/{credentialId}` | Delete credential |
| GET | `/api/accounts/{accountId}/credentials/available` | Available credentials |
| GET | `/api/accounts/{accountId}/credentials/next-number` | Next number |

### Remote Events

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/remote-events` | Generate event/occurrence |

### Visit Scheduling

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/accounts/{accountId}/visitor-schedulings` | List schedules |
| POST | `/api/accounts/{accountId}/visitor-schedulings` | Create schedule |
| GET | `/api/accounts/{accountId}/visitor-schedulings/{schedulingId}` | Query schedule |
| PUT | `/api/accounts/{accountId}/visitor-schedulings/{schedulingId}` | Edit schedule |
| DELETE | `/api/accounts/{accountId}/visitor-schedulings/{schedulingId}` | Delete schedule |

### Synchronization

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/wizard/accounts/{accountId}/people/{personId}` | Retrieve complete person |
| POST | `/api/wizard/accounts/{accountId}/people` | Create with synchronization |
| PUT | `/api/wizard/accounts/{accountId}/people/{personId}` | Update with synchronization |
| PUT | `/api/accounts/{accountId}/people/{personId}/synchronize` | Simplified synchronization |

### Webhooks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/webhooks` | List webhooks |
| POST | `/api/webhooks` | Create webhook |
| PUT | `/api/webhooks/{webhookId}` | Edit webhook |
| DELETE | `/api/webhooks/{webhookId}` | Delete webhook |
| GET | `/api/webhooks/{webhookId}/doors` | List webhook doors |
| PUT | `/api/webhooks/{webhookId}/doors` | Configure doors |
| GET | `/api/webhooks/{webhookId}/events` | List webhook events |
| PUT | `/api/webhooks/{webhookId}/events` | Configure events |

### Reports

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/accounts/{accountId}/reports/accesses` | Access report (account) |
| POST | `/api/reports/accesses` | Access report (general) |
| GET | `/api/accounts/{accountId}/reports/accesses/{id}` | Access detail |
