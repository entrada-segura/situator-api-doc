# Sincronização de Pessoas

Processo para cadastro/atualização de pessoas nos dispositivos de forma individual.

## Sincronização Parcial

### Funcionamento

1. O sistema integrador envia informações de cadastro da pessoa para a API
2. O Situator atualiza em todos os dispositivos que a pessoa tem permissão de acesso
3. Os dispositivos que receberão as informações são aqueles nas zonas de acesso da pessoa

### Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/wizard/accounts/{accountId}/people/{personId}` | Recuperar pessoa |
| POST | `/api/wizard/accounts/{accountId}/people` | Incluir pessoa |
| PUT | `/api/wizard/accounts/{accountId}/people/{personId}` | Atualizar pessoa |

### Estrutura do Objeto

```json
{
  "person": {
    "id": 1,
    "name": "Pessoa Teste 01",
    "cpf": "050.018.610-39",
    "document": "456789",
    "phone": "(48) 99853621",
    "email": "teste@seventh.com.br",
    "active": true,
    "personType": 1,
    "personImage": { "portrait": "...", "icon": "...", "avatar": "...", "guid": "..." },
    "documentImage": { "portrait": "...", "guid": "..." },
    "gender": 1,
    "birthday": "1988-01-11T00:00:00.000",
    "duressPassword": "batata",
    "department": "Desenvolvimento",
    "responsible": true,
    "accessPermission": true
  },
  "personAccount": {
    "accountId": 1000,
    "validity": null,
    "pin": 1,
    "block": null,
    "apartment": null,
    "password": "",
    "startDate": null
  },
  "credentials": [...],
  "vehicles": [...],
  "personZones": [...],
  "fingerprints": [...],
  "units": [],
  "faceAccess": null
}
```

### IDs de Dedos para Biometria

| ID | Dedo |
|----|------|
| 0 | Mínimo esquerdo |
| 1 | Anelar esquerdo |
| 2 | Médio esquerdo |
| 3 | Indicador esquerdo |
| 4 | Polegar esquerdo |
| 5 | Polegar direito |
| 6 | Indicador direito |
| 7 | Médio direito |
| 8 | Anelar direito |
| 9 | Mínimo direito |

### Comportamento na Atualização (PUT)

| Campo | Valor | Comportamento |
|-------|-------|---------------|
| `personAccount` | `null` ou `{}` ou omitido | Mantém valores existentes |
| `credentials` | `null` ou omitido | Mantém valores existentes |
| `credentials` | `[]` (vazio) | Remove todas as credenciais |
| `vehicles` | `null` ou omitido | Mantém valores existentes |
| `vehicles` | `[]` (vazio) | Remove todos os veículos |
| `personZones` | `null` ou omitido | Mantém valores existentes |
| `personZones` | `[]` (vazio) | Remove acesso de todas as zonas |
| `fingerprints` | `null` ou `[]` ou omitido | Mantém valores existentes |
| `units` | `null` ou omitido | Mantém valores existentes |
| `units` | `[]` (vazio) | Remove todas as unidades |

---

## Método Simplificado

API simplificada para sincronização parcial em dispositivos de acesso.

### Limitações

**Equipamentos suportados:**
- Apenas dispositivos com reconhecimento facial moderno dos fabricantes: Intelbras, Hikvision e ZKTeco (exceto MultiBio700, MultiBio800H e VF680)

**O que sincroniza:**
- Dados da pessoa
- Dados de acesso (permissões)
- Fotos
- Pessoas ativadas/desativadas
- Biometrias (digitais)

**O que NÃO sincroniza:**
- PINs (exceto pin principal)
- Cartões/Credenciais
- Pessoas excluídas
- Credenciais excluídas
- Guarita IP
- Horários

### Endpoint

**Endpoint:** `PUT /api/accounts/{accountId}/people/{personId}/synchronize`

> **Permissão necessária:** "Configurações do sistema → Integrações → Acesso"

**Retorno:** Apenas status de erro ou sucesso (sem dados de retorno).

> **Atenção:** O serviço apenas dispara o processo de atualização. Se ocorrerem falhas na sincronização dos dispositivos, só serão identificadas analisando o log do sistema.
