export default `

  type InjuriesCaseFile {
    caseFileId: String!
    injurieId: String!
    severity: String!
  }

  type Query {
    allInjuriesByCaseFile: [Injurie!]!
  }

  type Mutation {
    createInjuriesCaseFile(caseFileId: String!, injurieId: String!, severity: String!): InjuriesCaseFile!
  }

`;

/*

InjuriesCaseFile

-> caseFileId
-> injurieId
-> Severity

*/