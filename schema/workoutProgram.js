export default `

  type WorkoutProgram {
    id: String!
    caseFileId: String!
    trainerId: String!
    comments: String!
    observations: String!
    objective: String!
    workoutsWeek: String!
  }

  type Query {
    getWorkoutProgram(id: String!): User!
    allWorkoutPrograms: [WorkoutProgram!]!
  }

  type Mutation {
    createWorkoutProgram(id: String!, caseFileId: String!, trainerId: String!, comments: String!, observations: String!, objective: String!, workoutsWeek: String!): WorkoutProgram!
  }

`;