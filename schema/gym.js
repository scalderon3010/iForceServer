export default `

  type Gym {
    id: String!
    accountid: String!
    juridicalid: String!
    MHKey: String!
    name: String!
    phoneNumber: String!
    location: String!
    owner: String!
  }

  type Query {
    getGym(id: String!): Gym!
    allGyms: [Gym!]!
  }

  type Mutation {
    createGym(id: String!, accountid: String!, juridicalid: String!, MHKey: String!, name: String!, phoneNumber: String!, location: String!, owner: String!): Gym!
  }

`;

/*

Gym:
-> id (local enumeration)
-> accountid (fk)
-> juridicalid
-> MHKey
-> name
-> phonenumber
-> location
-> owner

*/
