# Arquitetura da Solução

O Situator API utiliza tecnologia **REST**, com métodos HTTP para criar, ler, atualizar e excluir dados.

## Métodos HTTP

| Método | Funcionalidade |
|--------|----------------|
| `GET` | Consulta dados existentes |
| `POST` | Insere novos dados |
| `PUT` | Atualiza dados existentes |
| `DELETE` | Deleta dados existentes |

## URL da Requisição

```
http://[endereço-servidor]:[porta]/api/[endpoint]
```

**Exemplo:** `http://192.168.0.109:8080/api/login`

## Status HTTP

| Tipo | Primeiro Dígito | Exemplos |
|------|-----------------|----------|
| Sucesso | 2 | 200 OK, 201 Created, 204 No content |
| Redirecionamento | 3 | 301 Moved |
| Erro do cliente | 4 | 400 Bad request, 401 Unauthorized, 403 Not permitted, 404 Not found |
| Erro do servidor | 5 | 500 Internal server error, 502 Bad gateway, 504 Gateway timeout |

## Documentação Swagger

Acesse a estrutura dos modelos de dados via URI `/api/help/index` no servidor do Situator.
