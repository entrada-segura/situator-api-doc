# Relatórios

Listagem de registros de acessos autorizados/negados e ocorrências de eventos.

> **Permissão necessária:** Usuário com perfil autorizado para consultar relatórios (geralmente administradores e supervisores).

## Relatório de Acessos

**Endpoint:** `POST /api/accounts/{accountId}/reports/accesses`

ou

**Endpoint:** `POST /api/reports/accesses`

## Filtros de Consulta

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

## Descrição dos Filtros

| Filtro | Descrição |
|--------|-----------|
| `selectedAccounts` | Array de accountId |
| `dateFrom/dateTo` | Período (formato: aaaa-mm-ddThh:mm:ssZ) |
| `aptoDepto` | Apartamento, bloco ou departamento |
| `selectedPeople` | Array de personId |
| `selectedPersonTypes` | 0=nenhum, 1=empregado, 2=morador, 3=visitante, 4=prestador |
| `selectedPersonProfiles` | Array de IDs de perfil de acesso |
| `selectedZones` | Array de zoneId |
| `selectedDoors` | Array de {serverId, doorId} |
| `selectedUnits` | Array de unitId |
| `selectedVehicles` | Array de vehicleId |
| `selectedSituations` | 0=entrada autorizada, 1=saída autorizada, 2=entrada negada, 3=saída negada, 4=entrada coagida, 5=saída coagida |
| `selectedUsers` | Array de userId |
| `selectedResponsibles` | Array de personId responsáveis |
| `selectedOpeningTypes` | Tipos de abertura (ver tabela abaixo) |
| `timeFrom/timeTo` | Horário (formato: hh:mm:ss) |
| `limit` | Quantidade máxima (default: 10.000) |

## Tipos de Abertura (selectedOpeningTypes)

| Valor | Descrição |
|-------|-----------|
| 0 | Nenhum |
| 1 | Digital |
| 2 | Cartão |
| 3 | Senha |
| 4 | Controle |
| 5 | QR Code |
| 6 | Chave virtual |
| 7 | Abertura remota |
| 8 | Botoeira |
| 9 | Facial |
| 10 | Digital e cartão |
| 11 | Cartão e senha |
| 12 | Cartão, digital e senha |
| 13 | Digital e senha |
| 14 | Tag passiva |

## Detalhe de um Acesso

**Endpoint:** `GET /api/accounts/{accountId}/reports/accesses/{id}`
