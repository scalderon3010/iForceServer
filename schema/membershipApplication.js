export default `

  type MembershipApplication {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getMembershipApplication(id: String!): User!
    allMembershipApplications: [MembershipApplication!]!
  }

  type Mutation {
    createMembershipApplication(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): MembershipApplication!
  }

`;