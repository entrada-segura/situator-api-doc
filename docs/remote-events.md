# Gerar Ocorrências (Eventos Remotos)

A API permite gerar eventos remotamente que aparecerão como ocorrências para os atendentes no Situator.

## Criar Evento Remoto

**Endpoint:** `POST /api/remote-events`

> **Permissão necessária:** O perfil de usuário deve ter a permissão "API de eventos".

**Exemplo simples:**

```json
{
  "accountCode": "1000",
  "eventCode": "CONNECTION_LOSS"
}
```

**Exemplo completo:**

```json
{
  "accountCode": "string",
  "zoneCode": "string",
  "eventCode": "string",
  "priority": 0,
  "join": true,
  "latitude": 0,
  "longitude": 0,
  "description": "string",
  "message": "string",
  "person": {
    "id": 0,
    "integrationId": 0
  },
  "callId": "string",
  "payload": "string",
  "visitorId": 0,
  "automaticClose": true,
  "silent": false
}
```

## Campos do Evento

| Campo | Descrição | Obrigatório |
|-------|-----------|-------------|
| `accountCode` | Código da conta no Situator | Sim* |
| `eventCode` | Código do Evento no Situator | Sim |
| `zoneCode` | Código da Zona (default: zona geral) | Não |
| `priority` | 0=Baixa, 1=Média, 2=Alta, 3=Crítica | Não |
| `join` | Agrupar ocorrências similares (default: true) | Não |
| `latitude/longitude` | Localização no mapa | Não |
| `description` | Descrição do evento | Não |
| `message` | Texto no log de histórico | Não |
| `person` | Pessoa enviando o evento (id ou integrationId) | Não |
| `callId` | Identificação para integração de telefonia | Não |
| `payload` | Dados para ação HTTP GET | Não |
| `visitorId` | Pré-visitante para previsões de visitas | Não |
| `automaticClose` | Finaliza ocorrência agrupada | Não |
| `silent` | Ocorrência apenas em relatórios (sem tela) | Não |

*Obrigatório para usuários não vinculados a uma conta

## Referência de Códigos de Eventos

### Eventos Pré-cadastrados

| Evento | Código |
|--------|--------|
| Aberto corretamente | `CORRECTLY_OPENED` |
| Aberto inesperadamente | `UNEXPECTEDLY_OPENED` |
| Aberto remotamente | `REMOTELY_OPENED` |
| Alarme armado | `R401` |
| Alarme armado forçado | `R456` |
| Alarme auto armado | `R403` |
| Alarme desarmado | `E401` |
| Auxílio | `AUXILIO` |
| Barreira virtual | `VIRTUAL_BARRIER` |
| Cerca virtual | `VIRTUAL_FENCE` |
| Curto circuito na zona | `E142` |
| Detecção de movimento | `MOTION_DETECTION` |
| Disparo de zona | `E130` |
| Dupla passagem | `DOUBLE_PASS` |
| Emergência | `EMERGENCIA` |
| Emergência médica | `EMERGENCIA_MEDICA` / `E100` |
| Emergência silenciosa | `E121` |
| Entrada assistida | `ENTRADA_ASSISTIDA` |
| Entrada autorizada | `ENTRY_AUTHORIZED` |
| Entrada coagida | `ENTRY_DURESS` |
| Entrada negada | `ENTRY_DENIED` |
| Evento de IO | `IO` |
| Falha de bateria | `E302` |
| Falha de comunicação | `E350` |
| Falha de energia elétrica | `E301` |
| Falha de fonte auxiliar | `E300` |
| Falha de módulo expansor | `E143` |
| Falha de sirene | `E321` |
| Falha de tensão no barramento | `E333` |
| Fechado corretamente | `CLOSED_PROPERLY` |
| Fechado remotamente | `REMOTELY_CLOSED` |
| Incêndio | `E110` |
| Interfone acionado | `INTERFONE_ACIONADO` |
| Mudança de cenário | `SCENERY_CHANGE` |
| Objeto abandonado | `ABANDONED_OBJECT` |
| Objeto removido | `OBJECT_REMOVED` |
| Obstrução de imagem | `OBSTRUCTION` |
| Pânico | `PANICO` |
| Partição armada | `R402` |
| Partição desarmada | `E402` |
| Passagem | `PASS` |
| Perda de conexão | `CONNECTION_LOSS` |
| Perda de sinal | `SIGNAL_LOSS` |
| Porta deixada aberta | `DOOR_LEFT_OPEN` |
| Porta violada | `DOOR_SMASHED` |
| Restauro curto circuito | `R142` |
| Restauro de bateria | `R302` |
| Restauro de sirene | `R321` |
| Restauro de tamper | `R144` |
| Restauro de zona | `R130` |
| Restauro energia elétrica | `R301` |
| Restauro fonte auxiliar | `R300` |
| Restauro módulo expansor | `R143` |
| Restauro tensão no barramento | `R333` |
| Saída autorizada | `EXIT_AUTHORIZED` |
| Saída coagida | `EXIT_DURESS` |
| Saída negada | `EXIT_DENIED` |
| Violação de tamper | `E144` |
| Zona inibida | `E570` |
