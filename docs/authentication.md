# Autenticação (Login)

Existem dois métodos de autenticação que permitem utilizar os demais serviços de integração.

## Métodos de Autenticação

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/login` | PUT | Cria cookie de autenticação com usuário e senha |
| `/api/login/from-token` | GET | Cria cookie de autenticação a partir de token fixo |
| `/api/logoff` | GET | Remove o cookie de autenticação |
| `/api/current-user` | GET | Retorna dados do usuário atual |

## Cookie de Sessão

Em ambos os casos, será retornado um **Cookie de sessão `Seventh.Auth`** com o Token de autenticação criptografado. O Cookie deve ser utilizado nas requests subsequentes, caso contrário será retornado código `401 - Unauthorized`.

## Token por Usuário e Senha

**Endpoint:** `PUT /api/login`

```json
{
  "userName": "string",
  "password": "string",
  "rememberMe": true,
  "accountId": 0
}
```

**Campos:**
- `username`: Nome do usuário no Situator *(Obrigatório)*
- `password`: Senha do usuário no Situator *(Obrigatório)*
- `rememberMe`: Lembrar usuário na próxima autenticação *(Não Obrigatório)*
- `accountId`: Id da conta para login de usuário com perfil de Pessoa *(Não Obrigatório)*

> O token expira quando o usuário troca de senha.

## Token Fixo

**Endpoint:** `GET /api/login/from-token`

O token fixo é gerado no cadastro do usuário e **não expira**. Ideal quando não se deseja manter informações de senhas na aplicação integradora.

## Logoff

**Endpoint:** `GET /api/logoff`

Remove o cookie do navegador. O token continua válido para autenticações futuras (não há expiração de Cookies ou Tokens).
