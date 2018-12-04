export default `

  type Exercise {
    id: String!
    name: String!
    muscleGroup: String!
  }

  type Query {
    getExercise(id: String!): User!
    allExercises: [Exercise!]!
  }

  type Mutation {
    createExercise( id: String!, name: String!, muscleGroup: String!): Exercise!
  }

`;

/*

Exercice
-> id
-> name
-> muscleGroup

*/