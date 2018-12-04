export default `

  type WorkoutProgramExercise {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getWorkoutProgramExercise(id: String!): User!
    allWorkoutProgramExercises: [WorkoutProgramExercise!]!
  }

  type Mutation {
    createWorkoutProgramExercise(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): WorkoutProgramExercise!
  }

`;