# Cadastro de Zonas

As zonas identificam as áreas internas da conta de um cliente onde são alocados os recursos de vídeo, acesso ou automação (ex: Hall de entrada, Salão de Festas, Garagem, Academia).

## Listar Zonas

**Endpoint:** `GET /api/zones`

**Parâmetros opcionais:**
- `activeOnly` (default: true)
- `publicOnly` (default: false)
- `accountId`

**Retorno:**

```json
{
  "zones": [
    {
      "id": 1002,
      "accountId": 1002,
      "accountName": "Condomínio XYZ",
      "name": "Portaria",
      "code": 100,
      "description": "Portaria - Acesso principal do condomínio",
      "active": true,
      "generalZone": false,
      "restrict": true,
      "layoutId": 173,
      "layoutName": "Portaria"
    }
  ]
}
```

## Criar Zona

**Endpoint:** `POST /api/accounts/{accountId}/zones`

```json
{
  "name": "Portaria",
  "code": "100",
  "description": "Portaria - Acesso principal do condomínio",
  "active": true,
  "restrict": true,
  "layoutId": 173
}
```

| Campo | Descrição |
|-------|-----------|
| `restrict` | Zona acessível somente por pessoas cadastradas pelos administradores |
| `layoutId` | Layout de imagens do VMS DGuard para abertura automática em ocorrências |

## Editar Zona

**Endpoint:** `PUT /api/accounts/{accountId}/zones/{zoneId}`
