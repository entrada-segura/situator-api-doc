# Permissão de Acesso para Pessoa

Uma pessoa no Situator pode ser cadastrada com ou sem permissão de acesso. Pessoas com permissão são autorizadas a abrir portas das zonas permitidas e são sincronizadas nos dispositivos de acesso.

## Consultar Permissão de Acesso

**Endpoint:** `GET /api/accounts/{accountId}/people/{personId}/access`

**Retorno:**

```json
{
  "access": {
    "pin": 270,
    "apartment": null,
    "block": null,
    "administrator": false,
    "startDate": null,
    "validity": null,
    "password": null,
    "active": true,
    "type": 1
  }
}
```

## Campos de Acesso

| Campo | Descrição |
|-------|-----------|
| `pin` | Código PIN de acesso (atribuído automaticamente se null) |
| `type` | 0=nenhum, 1=empregado, 2=morador, 3=visitante, 4=prestador de serviço |
| `startDate` | Data de início de acessos |
| `validity` | Prazo de validade (obrigatório para visitantes/prestadores) |
| `administrator` | Privilégio para configurar dispositivos de acesso |
| `apartment` | Código de acesso numérico (LinearHCS, Intelbras Remote) |
| `block` | Código de acesso numérico (LinearHCS) |
| `password` | Senha em dispositivos (ZKTeco: 5 dígitos, Linear: 6, Remote: 3, uTech: 4) |

## Criar/Editar/Excluir Permissão

- **Criar:** `POST /api/accounts/{accountId}/people/{personId}/access`
- **Editar:** `PUT /api/accounts/{accountId}/people/{personId}/access`
- **Excluir:** `DELETE /api/accounts/{accountId}/people/{personId}/access`
