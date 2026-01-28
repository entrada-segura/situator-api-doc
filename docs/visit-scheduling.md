# Previsões de Visitas

Funcionalidade para agendar entradas de visitantes, definindo datas e listas de convidados.

## Listar Previsões de Visitas

**Endpoint:** `GET /api/accounts/{accountId}/visitor-schedulings`

**Parâmetros:**
- `startDate` - Data de início (formato dd/MM/aaaa)
- `endDate` - Data final (formato dd/MM/aaaa)

## Criar Agendamento

**Endpoint:** `POST /api/accounts/{accountId}/visitor-schedulings`

```json
{
  "occasion": "Reformas e manutenções",
  "startDate": "19/03/2021",
  "endDate": "19/10/2021",
  "startTime": "09:00",
  "endTime": "18:00",
  "observation": "Limitar circulação nas áreas principais",
  "frequencyType": 1,
  "canEnterAccompanied": true,
  "canEnterNight": false,
  "notifyArrival": true,
  "sunday": false,
  "monday": true,
  "tuesday": true,
  "wednesday": true,
  "thursday": true,
  "friday": true,
  "saturday": false,
  "active": true,
  "commonArea": {
    "id": 1
  }
}
```

## Campos do Agendamento

| Campo | Descrição |
|-------|-----------|
| `occasion` | Descrição do objetivo do evento |
| `startDate/endDate` | Período da previsão |
| `startTime/endTime` | Horários permitidos |
| `frequencyType` | 0=única, 1=temporária, 2=permanente |
| `canEnterAccompanied` | Podem entrar outras pessoas com convidados |
| `canEnterNight` | Convidados podem entrar no período noturno |
| `notifyArrival` | Avisar quando convidados chegarem |
| `sunday...saturday` | Dias da semana permitidos |
| `commonArea` | Identificador da área comum |
| `environment` | Local do evento (obrigatório se não houver área comum) |
| `zones` | Array de ids das zonas de acesso |
| `visitedId` | Responsável por autorizar entrada |

## Convidados como Pessoa Visitante

**Listar:** `GET /api/accounts/{accountId}/people-schedulings/{schedulingId}/visitors`

**Adicionar:** `POST /api/accounts/{accountId}/people-schedulings/{schedulingId}/people-visitors`

```json
{
  "peopleIds": [1, 10, 500, 80527]
}
```

## Convidados como Pré-visitante

**Listar:** `GET /api/accounts/{accountId}/visitor-schedulings/{schedulingId}/visitors`

**Criar:** `POST /api/accounts/{accountId}/visitor-schedulings/{schedulingId}/visitors`

```json
{
  "name": "Beltrano",
  "typeId": 3,
  "document": "987654321",
  "email": "beltrano@teste.com.br"
}
```

## Pessoas Responsáveis

**Endpoint:** `GET /api/accounts/{accountId}/people-responsibles`

Retorna lista de pessoas configuradas como responsáveis que podem autorizar entrada de visitantes.
