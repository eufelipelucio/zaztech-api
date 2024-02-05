
## Teste Zaztech
-Faça uma aplicação para controle de tarefas
## Regras:
 * A aplicação deve listar as tarefas por ordem de prioridade e estado, além de permitir a inclusão de uma nova tarefa.
* Uma tarefa pode ter diferentes níveis de prioridade (baixa, normal e alta).
* Deve ser possível anexar uma pessoa a uma tarefa.
* Uma pessoa pode estar contida em ter até 3 tarefas.
* Deve ser possível alterar uma tarefa.
* Deve ser possível remover uma tarefa.
* Deve ser possível alterar o estado de uma tarefa (Pendente, Em andamento ou Concluída).


## Rodar o projeto

- Precisa ter o node instalado.
- Precisa ter instalado e configurado o git na sua máquina.

```bash
    git clone https://github.com/eufelipelucio/zaztech-api.git
    cd zaztech-api
```
- Configure seu banco de dados em `./config/config.json`
```bash

 "test": {
    "username": "seu-username",
    "password": "sua-senha",
    "database": "seu-banco",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"
  }
  ```
  - Inicie o projeto
```bash
    npm i
    sequelize db:migrate
    node app.js
```


## Autores

- [@eufelipelucio](https://www.github.com/eufelipelucio)

