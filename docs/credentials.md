# Cadastro de Credenciais

As credenciais de uma pessoa são utilizadas para conceder acesso aos locais através dos dispositivos configurados nas zonas.

## Tipos de Credenciais

| cardType | Descrição |
|----------|-----------|
| 0 | Nenhum |
| 1 | Cartão HID |
| 3 | Tag passiva |
| 4 | Tag ativa |
| 5 | Controle Nice |
| 6 | Controle Intelbras |
| 7 | QRCode uTech |
| 8 | Controle uTech |

## Formatos de Código

| Formato | Descrição |
|---------|-----------|
| **Wiegand 26** | Dois grupos numéricos (3 dígitos + 5 dígitos) separados por vírgula/espaço |
| **Wiegand 34** | 8 caracteres hexadecimais |
| **Decimal** | 10 caracteres numéricos |
| **Serial** | Hexadecimal de 5 bytes (10 dígitos) |
| **AbaTrack** | Serial convertido para decimal com 14 dígitos |

## Listar Credenciais

**Endpoint:** `GET /api/accounts/{accountId}/credentials`

```json
{
  "credentials": [
    {
      "id": 35,
      "duress": false,
      "personId": 168,
      "personName": "Fulano",
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

## Criar Credencial

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

> Se `quantity` for informado, o cadastramento acontece sequencialmente em lote.

## Outros Endpoints

- `GET /api/accounts/{accountId}/credentials/next-number` - Próximo número disponível
- `GET /api/accounts/{accountId}/credentials/available` - Credenciais sem vínculo
- `DELETE /api/accounts/{accountId}/credentials/{credentialId}` - Excluir credencial
