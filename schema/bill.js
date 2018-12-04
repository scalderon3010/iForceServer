export default `

  type Bill {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getBill(id: String!): User!
    allBills: [Bill!]!
  }

  type Mutation {
    createBill(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): Bill!
  }

`;