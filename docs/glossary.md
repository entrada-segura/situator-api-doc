# Glossário

| Termo | Definição |
|-------|-----------|
| **API REST** | Conjunto de serviços disponibilizados pelo servidor através do protocolo HTTP |
| **Credencial** | Um cartão, controle, digital, biometria facial, tag ativa, tag passiva ou QRCode |
| **Endpoint** | Um endereço HTTP na API REST |
| **Eventos** | Modelos configuráveis de tudo que pode acontecer no sistema. O acontecimento de um evento pode gerar uma ocorrência |
| **Eventos de acesso** | Entrada Autorizada, Entrada Negada, Entrada Coagida, Saída Autorizada, Saída Negada, Saída Coagida |
| **Integrador** | Sistema integrado ao Situator |
| **Método HTTP** | Método de requisição suportado pelo protocolo HTTP (GET, POST, PUT, DELETE) |
| **Ocorrência** | Um fato sucedido, o registro de um evento |
| **GUID/UUID** | Identificador único global ou universal - string com caracteres hexadecimais separados por hífen |

---

## Referência Rápida de Endpoints

### Autenticação

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| PUT | `/api/login` | Login com usuário/senha |
| GET | `/api/login/from-token` | Login com token fixo |
| GET | `/api/logoff` | Logout |
| GET | `/api/current-user` | Usuário atual |

### Pessoas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/accounts/{accountId}/people` | Listar pessoas |
| POST | `/api/accounts/{accountId}/people` | Criar pessoa |
| PUT | `/api/accounts/{accountId}/people/{personId}` | Editar pessoa |
| DELETE | `/api/accounts/{accountId}/people/{personId}` | Excluir pessoa |
| PUT | `/api/accounts/{accountId}/people/{personId}/image` | Foto de identificação |
| PUT | `/api/accounts/{accountId}/people/{personId}/document/image` | Foto do documento |

### Permissões de Acesso

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/accounts/{accountId}/people/{personId}/access` | Consultar permissão |
| POST | `/api/accounts/{accountId}/people/{personId}/access` | Criar permissão |
| PUT | `/api/accounts/{accountId}/people/{personId}/access` | Editar permissão |
| DELETE | `/api/accounts/{accountId}/people/{personId}/access` | Excluir permissão |

### Zonas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/zones` | Listar zonas |
| POST | `/api/accounts/{accountId}/zones` | Criar zona |
| PUT | `/api/accounts/{accountId}/zones/{zoneId}` | Editar zona |

### Credenciais

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/accounts/{accountId}/credentials` | Listar credenciais |
| POST | `/api/accounts/{accountId}/credentials` | Criar credencial |
| DELETE | `/api/accounts/{accountId}/credentials/{credentialId}` | Excluir credencial |
| GET | `/api/accounts/{accountId}/credentials/available` | Credenciais disponíveis |
| GET | `/api/accounts/{accountId}/credentials/next-number` | Próximo número |

### Eventos Remotos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/remote-events` | Gerar evento/ocorrência |

### Previsões de Visitas

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/accounts/{accountId}/visitor-schedulings` | Listar agendamentos |
| POST | `/api/accounts/{accountId}/visitor-schedulings` | Criar agendamento |
| GET | `/api/accounts/{accountId}/visitor-schedulings/{schedulingId}` | Consultar agendamento |
| PUT | `/api/accounts/{accountId}/visitor-schedulings/{schedulingId}` | Editar agendamento |
| DELETE | `/api/accounts/{accountId}/visitor-schedulings/{schedulingId}` | Excluir agendamento |

### Sincronização

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/wizard/accounts/{accountId}/people/{personId}` | Recuperar pessoa completa |
| POST | `/api/wizard/accounts/{accountId}/people` | Criar com sincronização |
| PUT | `/api/wizard/accounts/{accountId}/people/{personId}` | Atualizar com sincronização |
| PUT | `/api/accounts/{accountId}/people/{personId}/synchronize` | Sincronização simplificada |

### Webhooks

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/webhooks` | Listar webhooks |
| POST | `/api/webhooks` | Criar webhook |
| PUT | `/api/webhooks/{webhookId}` | Editar webhook |
| DELETE | `/api/webhooks/{webhookId}` | Excluir webhook |
| GET | `/api/webhooks/{webhookId}/doors` | Listar portas do webhook |
| PUT | `/api/webhooks/{webhookId}/doors` | Configurar portas |
| GET | `/api/webhooks/{webhookId}/events` | Listar eventos do webhook |
| PUT | `/api/webhooks/{webhookId}/events` | Configurar eventos |

### Relatórios

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/accounts/{accountId}/reports/accesses` | Relatório de acessos (conta) |
| POST | `/api/reports/accesses` | Relatório de acessos (geral) |
| GET | `/api/accounts/{accountId}/reports/accesses/{id}` | Detalhe de acesso |
