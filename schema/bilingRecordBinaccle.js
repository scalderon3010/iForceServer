export default `

  type BillingRecordBinaccle {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getBillingRecordBinaccle(id: String!): User!
    allBillingRecordBinaccles: [BillingRecordBinaccle!]!
  }

  type Mutation {
    createBillingRecordBinaccle(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): BillingRecordBinaccle!
  }

`;