export default `

  type Injurie {
    id: String!
    bodyPart: String!
    description: String!
  }

  type Query {
    getInjurie(id: String!): User!
    allInjuries: [Injurie!]!
  }

  type Mutation {
    createInjurie(id: String!, bodyPart: String!, description: String!): Injurie!
  }

`;

/*

Injurie
-> id
-> bodyPart
-> description


*/