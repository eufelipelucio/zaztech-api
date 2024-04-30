
## Teste Zaztech
- Faça uma aplicação para controle de tarefas
## Regras:
 * A aplicação deve listar as tarefas por ordem de prioridade e estado, além de permitir a inclusão de uma nova tarefa.
* Uma tarefa pode ter diferentes níveis de prioridade (baixa, normal e alta).
* Deve ser possível anexar uma pessoa a uma tarefa.
* Uma pessoa pode estar contida em ter até 3 tarefas.
* Deve ser possível alterar uma tarefa.
* Deve ser possível remover uma tarefa.
* Deve ser possível alterar o estado de uma tarefa (Pendente, Em andamento ou Concluída).


## Rodar o projeto

- Precisa ter o Node instalado.
- Precisa ter MySQL instalado.
- Precisa ter instalado e configurado o git na sua máquina.

```bash
    git clone https://github.com/eufelipelucio/zaztech-api.git
    cd zaztech-api
```
- Configure seu banco de dados em `./config/config.json`
```bash

 "development": {
    "username": "seu-username",
    "password": "sua-senha",
    "database": "seu-banco",
    "host": "localhost",
    "dialect": "mysql"
  }
  ```
  - Inicie o projeto
```bash
    npm i
    sequelize db:migrate
    npm start
```
"![image](https://github.com/eufelipelucio/zaztech-api/assets/79817131/77512185-252d-446a-8f5e-18d13ba65929)"

## Documentação da API

#### Retorna todos as tarefas

```http
  GET /api/v1/tarefas
```

#### Retorna uma tarefa

```http
  GET /api/v1/tarefas/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do tarefa que você quer |


#### Adiciona uma tarefa

```http
  POST /api/v1/tarefas
```
#### Exemplo de Requisição
```javascript
  {
    "descricao": "Fazer compras no supermercado",
    "prioridade": "alta",
    "estado": "Pendente",
    "PessoaId": 1
  }
```
#### Altera uma tarefa

```http
  PUT /api/v1/tarefas/${id}
```
#### Exemplo de Requisição
```javascript
  {
    "descricao": "Fazer compras no supermercado",
    "prioridade": "alta",
    "estado": "Pendente",
    "PessoaId": 1
  }
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da tarefa que você quer alterar |

#### Deleta uma tarefa

```http
  DELETE /api/v1/tarefas/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da tarefa que você quer excluir |




#### Retorna todos as pessoas

```http
  GET /api/v1/pessoas
```

#### Retorna uma pessoa

```http
  GET /api/v1/pessoas/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do pessoa que você quer |


#### Adiciona uma pessoa

```http
  POST /api/v1/pessoas
```
#### Exemplo de Requisição
```javascript
  {
    "nome": "Felipe Lúcio",
  }
```
#### Altera uma pessoa

```http
  PUT /api/v1/pessoas/${id}
```
#### Exemplo de Requisição
```javascript
  {
    "nome": "Frank Sousa"
  }
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da pessoa que você quer alterar |

```http
  DELETE /api/v1/pessoas/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da pessoa que você quer excluir |





## Autores

- [@eufelipelucio](https://www.github.com/eufelipelucio)

