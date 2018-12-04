export default `

  type BillingRecord {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getBillingRecord(id: String!): User!
    allBillingRecords: [BillingRecord!]!
  }

  type Mutation {
    createBillingRecord(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): BillingRecord!
  }

`;