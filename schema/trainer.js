export default `

  type Trainer {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getTrainer(id: String!): User!
    allTrainers: [Trainer!]!
  }

  type Mutation {
    createTrainer(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): Trainer!
  }

`;