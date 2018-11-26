export default `

  type Account {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getAccount(id: String!): User!
    allAccounts: [Account!]!
  }

  type Mutation {
    createAccount(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): Account!
  }

`;