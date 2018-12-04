export default `

  type Agreement {
    id: String!
    gymId: String!
    userId: String!
    paymentType: String!
    paymentPeriod: String!
    date: String!
    status: String!
    amounts: String!
  }

  type Query {
    getAgreement(id: String!): User!
    allAgreements: [Agreement!]!
  }

  type Mutation {
    createAgreement(id: String!, gymId: String!, userId: String!, paymentType: String!, paymentPeriod: String!, date: String!, status: String!, amounts: String!): Agreement!
  }

`;

/*
Agreement
-> id (Pk)
-> gymId
-> userId
-> paymentType
-> paymentPeriod (monthly, trimester, semester, yearly)
-> date
-> status (ACTIVE, INACTIVE)
-> amounts
*/