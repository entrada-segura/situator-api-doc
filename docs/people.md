# Cadastro de Pessoas

Cada conta no Situator contém uma lista de pessoas cadastradas com informações pessoais e configurações personalizadas de acesso.

## Listar Pessoas

**Endpoint:** `GET /api/accounts/{accountId}/people`

**Filtros de paginação:**
- `pagination.count` - total de registros a retornar
- `pagination.itemsPerPage` - quantidade de registros por página
- `pagination.currentPage` - página atual
- `pagination.filters.name` - pesquisar por nomes, departamentos ou unidades
- `pagination.orderedBy` - campo de ordenação
- `pagination.ascending` - tipo de ordenação
- `pagination.filters.active` - somente ativas ou inativas

**Exemplo de retorno:**

```json
{
  "people": [
    {
      "id": 4654,
      "name": "Fulano",
      "active": false,
      "phone": "119985211",
      "email": "fulano@email.com.br",
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

## Criar Pessoa

**Endpoint:** `POST /api/accounts/{accountId}/people`

```json
{
  "name": "Fulana",
  "active": true,
  "gender": 2,
  "cpf": "129.920.900-93",
  "document": "44545454",
  "email": "fulana@comercial.com",
  "personType": 1,
  "phone": "98766543",
  "phoneType": 1,
  "department": "Comercial",
  "observation": "Contratada PJ",
  "birthday": "1987-01-09T00:00:00",
  "company": "XYZ CIA LTDA",
  "duressPassword": "socorro",
  "responsible": true,
  "imported": false,
  "accessPermission": true
}
```

## Campos de Pessoa

| Campo | Descrição | Valores |
|-------|-----------|---------|
| `personType` | Tipo de pessoa | 0=nenhum, 1=empregado, 2=morador, 3=visitante, 4=prestador de serviço |
| `gender` | Gênero | 0=nenhum, 1=masculino, 2=feminino |
| `phoneType` | Tipo de telefone | 0=nenhum, 1=celular, 2=residencial, 3=comercial, 4=ramal |
| `responsible` | Pode autorizar entrada de visitantes | boolean |
| `accessPermission` | Terá permissões para abrir portas | boolean |
| `personProfileId` | Perfil de acesso de zonas | integer |
| `unitId` | Identificador da unidade habitacional | integer |
| `duressPassword` | Palavra para informar coação | string |
| `integrationId` | Campo reservado para integração | integer |

## Endpoints de Imagem

- `PUT /api/accounts/{accountId}/people/{personId}/image` - Foto de identificação
- `PUT /api/accounts/{accountId}/people/{personId}/document/image` - Foto do documento

## Editar/Excluir Pessoa

- **Editar:** `PUT /api/accounts/{accountId}/people/{personId}`
- **Excluir:** `DELETE /api/accounts/{accountId}/people/{personId}`
