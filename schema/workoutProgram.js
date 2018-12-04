export default `

  type WorkoutProgram {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getWorkoutProgram(id: String!): User!
    allWorkoutPrograms: [WorkoutProgram!]!
  }

  type Mutation {
    createWorkoutProgram(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): WorkoutProgram!
  }

`;