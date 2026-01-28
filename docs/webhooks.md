# Webhooks

Webhooks são endpoints HTTP que os integradores implementam para receber notificações em tempo real de eventos do Situator.

## Casos de Uso

- **Eventos de acesso:** entrada/saída de moradores, entrada de visitantes
- **Ocorrências:** interfone, pânico, porta arrombada, porta deixada aberta
- **Cadastro de pessoas:** notificar criação, edição ou exclusão

## Considerações Importantes

- O Situator **não armazena** eventos a serem enviados
- **Não há retransmissão** em caso de falha
- Se o buffer chegar em **100 eventos**, novos eventos são **descartados**
- Para integrações complexas, recomenda-se usar ferramenta de processamento de mensagens (RabbitMQ, AmazonMQ)

## Fluxo de Configuração

### 1. Criar Endpoint no Integrador

O integrador deve criar um endpoint HTTP `POST` para receber os eventos. Sugestão: `/api/situator/events`

### 2. Cadastrar Webhook

**Endpoint:** `POST /api/webhooks`

```json
{
  "active": true,
  "name": "Integrador XYZ",
  "token": "6R7zvBFrjAheqw5L",
  "description": "Exemplo de integração webhook",
  "url": "https://integrador.com.br/api/situator/events"
}
```

### 3. Cadastrar Portas (para eventos de acesso)

**Listar portas:** `GET /api/webhooks/{webhookId}/doors`

**Cadastrar:** `PUT /api/webhooks/{webhookId}/doors`

```json
{
  "doors": [
    { "serverId": 1001, "doorId": 1 },
    { "serverId": 1002, "doorId": 1 }
  ]
}
```

### 4. Cadastrar Ocorrências

**Listar eventos:** `GET /api/webhooks/{webhookId}/events`

**Cadastrar:** `PUT /api/webhooks/{webhookId}/events`

```json
{
  "events": [
    { "eventId": 11 },
    { "eventId": 12 }
  ]
}
```

## Tipos de Eventos Recebidos

### Evento de Acesso (`type: "access"`)

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

**Valores de `direction`:** 0=None, 1=Entry, 2=Exit

**Valores de `openingType`:**

| Valor | Descrição |
|-------|-----------|
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
| 14 | TagPassiva |

### Evento de Ocorrência (`type: "occurrence"`)

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

### Evento de Pessoa (`type: "person"`)

```json
{
  "type": "person",
  "dateTime": "...",
  "subtype": 1,
  "accountId": 1000,
  "personId": 31
}
```

## Todos os Tipos de Eventos

| type | Descrição |
|------|-----------|
| `access` | Evento de acesso |
| `occurrence` | Ocorrência |
| `person` | Cadastro de pessoa |
| `scheduling` | Previsão de visitas |
| `visitorScheduling` | Visitante em previsão |
| `personCredencial` | Associação credencial-pessoa |
| `personUnit` | Associação pessoa-unidade |
| `personZones` | Associação pessoa-zona |
| `personAccess` | Dados de acesso da pessoa |
| `credential` | Credencial |
| `unit` | Unidade |
| `serverResource` | Recurso de servidor |
| `fingerprint` | Biometria digital |
| `imageAccesses` | Biometria facial |
| `personProfile` | Perfil de acesso |
| `zone` | Zona |
| `vehicle` | Veículo |
| `personVehicle` | Associação pessoa-veículo |

**Valores de `subtype`:** 0=None, 1=Created, 2=Changed/Incremented, 3=Deleted
