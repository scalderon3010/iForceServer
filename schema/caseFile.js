export default `

  type CaseFile {
    id: String!
    userId: String!
    observations: String!
    objective: String!
    initialBodyMesurements: String!
  }

  type Query {
    getCaseFile(id: String!): User!
    allCaseFiles: [CaseFile!]!
  }

  type Mutation {
    createCaseFile(id: String!, userId: String!, observations: String!, objective: String!, initialBodyMesurements: String!): CaseFile!
  }

`;

/*

CaseFile
-> id (pk)
-> userId (fk)
-> observations
-> objective
-> initialBodyMesurements

*/