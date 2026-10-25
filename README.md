# GraphQL Apollo Server

API GraphQL de estudo construída com [Apollo Server 5](https://www.apollographql.com/docs/apollo-server/). Os dados ficam em memória (`mockDb`), então não é preciso configurar banco de dados.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação

```bash
npm install
```

## Execução

| Comando       | Descrição                                                                |
| ------------- | ------------------------------------------------------------------------ |
| `npm start`   | Inicia o servidor                                                        |
| `npm run dev` | Inicia com `nodemon`, reiniciando ao alterar arquivos `.js` e `.graphql` |

O servidor sobe em `http://localhost:4000/`. Para usar outra porta, defina a variável `PORT`.

Abrindo esse endereço no navegador você acessa o Apollo Sandbox, onde dá para explorar o schema e executar queries.

## Estrutura

```
.
├── server.js            # Ponto de entrada: carrega os schemas e inicia o Apollo Server
├── schemas/             # Definições de tipos (SDL); todos os .graphql da pasta são carregados
│   ├── index.graphql    # Escalar Date
│   ├── Query.graphql
│   ├── Mutation.graphql
│   ├── User.graphql     # Tipos User e Profile
│   └── Product.graphql
├── resolvers/           # Um arquivo de resolvers por tipo
│   ├── index.js
│   ├── Query.js
│   ├── Mutation.js
│   ├── User.js
│   ├── Product.js
│   └── Date.js          # Implementação do escalar Date (ISO 8601)
└── mockDb/
    └── mockdb.js        # Usuários (users) e perfis (profiles) em memória
```

Para adicionar um tipo novo, crie o arquivo `.graphql` em `schemas/` e o resolver correspondente em `resolvers/`, registrando-o em `resolvers/index.js`.

## Schema

### Tipos

| Tipo      | Campos                                                     |
| --------- | ---------------------------------------------------------- |
| `User`    | `id`, `name`, `email`, `age`, `salary`, `vip`, `profile`   |
| `Profile` | `id`, `name`                                               |
| `Product` | `name`, `price`, `discount`, `discountedPrice`             |
| `Date`    | Escalar serializado como string ISO 8601                   |

Campos calculados:

- `User.salary`: `baseSalary + 1000`; retorna `null` quando o usuário não tem `baseSalary`
- `User.profile`: perfil buscado pelo `profileId` do usuário
- `Product.discountedPrice`: `price * (1 - discount)`, com `discount` entre 0 e 1 (ex.: `0.15` = 15%)

### Queries

| Query              | Retorno   | Descrição                   |
| ------------------ | --------- | --------------------------- |
| `hello`            | `String`  | Retorna `"Hello"`           |
| `currentTime`      | `String`  | Data/hora atual em texto    |
| `currentDate`      | `Date`    | Data/hora atual em ISO 8601 |
| `loggedUser`       | `User`    | Usuário fixo de exemplo     |
| `productOnSale`    | `Product` | Produto fixo de exemplo     |
| `users`            | `[User]`  | Lista todos os usuários     |
| `user(id: Int!)`   | `User`    | Busca um usuário pelo id    |

### Mutations

| Mutation                                        | Retorno | Descrição                                      |
| ----------------------------------------------- | ------- | ---------------------------------------------- |
| `createUser(name!, email!, age, profileId)`     | `User`  | Cria um usuário com id sequencial (em memória) |

Os usuários criados são perdidos quando o servidor reinicia.

## Exemplos

Listar usuários com o perfil:

```graphql
query {
  users {
    id
    name
    email
    profile {
      name
    }
  }
}
```

Buscar um usuário:

```graphql
query {
  user(id: 3) {
    name
    age
    profile {
      name
    }
  }
}
```

Criar um usuário:

```graphql
mutation {
  createUser(name: "Ana", email: "ana@email.com", age: 25, profileId: 2) {
    id
    name
    profile {
      name
    }
  }
}
```

Via `curl`:

```bash
curl -X POST http://localhost:4000/ \
  -H "Content-Type: application/json" \
  -d '{"query":"{ users { id name } }"}'
```

## Tecnologias

- [@apollo/server](https://www.npmjs.com/package/@apollo/server) 5
- [graphql](https://www.npmjs.com/package/graphql) 16
- [nodemon](https://www.npmjs.com/package/nodemon) 3 (desenvolvimento)
