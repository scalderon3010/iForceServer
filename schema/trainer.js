export default `

  type Trainer {
    id: String!
    accountId : String!
    gymId: String!
    name: String!
    lastName: String!
    phoneNumber: String!
    birthday: String!
  }

  type Query {
    getTrainer(id: String!): User!
    allTrainers: [Trainer!]!
  }

  type Mutation {
    createTrainer(id: String!, accountId : String!, gymId: String!, name: String!, lastName: String!, phoneNumber: String!, birthday: String!): Trainer!
  }

`;


/*

Trainer
-> id (local enumeration)
-> accountId (fk)
-> gymId (fk) 
-> name
-> lastName
-> phoneNumber
-> birthday

*/