export default `

  type Injurie {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getInjurie(id: String!): User!
    allInjuries: [Injurie!]!
  }

  type Mutation {
    createInjurie(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): Injurie!
  }

`;