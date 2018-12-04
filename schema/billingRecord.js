export default `

  type BillingRecord {
    id: String!
    agreementId: String!
    billId: String!
    paymentDate: String!
    expirationDate: String!
    status: String!
  }

  type Query {
    getBillingRecord(id: String!): User!
    allBillingRecords: [BillingRecord!]!
  }

  type Mutation {
    createBillingRecord(id: String!, agreementId: String!, billId: String!, paymentDate: String!, expirationDate: String!, status: String!): BillingRecord!
  }

`;

/*

  BillingRecord (actual)
-> id (local enumeration) (pk)
-> agreementId
-> billId (fk)
-> paymentDate
-> expirationDate
-> status (check it!)

 */