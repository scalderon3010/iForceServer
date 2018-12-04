export default `

  type CaseFile {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getCaseFile(id: String!): User!
    allCaseFiles: [CaseFile!]!
  }

  type Mutation {
    createCaseFile(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): CaseFile!
  }

`;