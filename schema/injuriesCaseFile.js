export default `

  type InjuriesCaseFile {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getInjuriesCaseFile(id: String!): User!
    allInjuriesCaseFiles: [InjuriesCaseFile!]!
  }

  type Mutation {
    createInjuriesCaseFile(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): InjuriesCaseFile!
  }

`;