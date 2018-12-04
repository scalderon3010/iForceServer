export default `

  type WorkoutProgramExercise {
    workoutProgramId: String!
    exerciseId: String!
    sets: String!
    reps: String!
  }

  type Query {
    getWorkoutProgramExercise(id: String!): User!
    allWorkoutProgramExercises: [WorkoutProgramExercise!]!
  }

  type Mutation {
    createWorkoutProgramExercise( workoutProgramId: String!, exerciseId: String!, sets: String!, reps: String!): WorkoutProgramExercise!
  }

`;

