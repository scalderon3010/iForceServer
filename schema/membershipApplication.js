export default `

  type MembershipApplication {
    id: String!
    userId: String!
    gymId: String!
    applicationDate: String!
    approvalDate: String!
    status: String!
  }

  type Query {
    getMembershipApplication(id: String!): User!
    allMembershipApplications: [MembershipApplication!]!
  }

  type Mutation {
    createMembershipApplication(id: String!, userId: String!, gymId: String!, applicationDate: String!, approvalDate: String!, status: String!): MembershipApplication!
  }

`;

/*

MembershipApplication:

-> id
-> userId
-> gymId
-> applicationDate
-> approvalDate (can be null)
-> status

*/