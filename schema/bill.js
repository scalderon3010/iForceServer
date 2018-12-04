export default `

  type Bill {
    id: String!
    gymId: String!
    userId: String!
  }

  type Query {
    getBill(id: String!): User!
    allBills: [Bill!]!
  }

  type Mutation {
    createBill(id: String!, gymId: String!, userId: String!): Bill!
  }

`;

  /*

  Bills (Needs to have all the attributes on digital bills (MH))
  -> id
  -> gymId
  -> userId
  
  */