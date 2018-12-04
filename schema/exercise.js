export default `

  type Exercise {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getExercise(id: String!): User!
    allExercises: [Exercise!]!
  }

  type Mutation {
    createExercise(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): Exercise!
  }

`;