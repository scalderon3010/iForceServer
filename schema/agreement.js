export default `

  type Agreement {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getAgreement(id: String!): User!
    allAgreements: [Agreement!]!
  }

  type Mutation {
    createAgreement(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): Agreement!
  }

`;