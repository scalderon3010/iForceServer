// CRUD
// Create
// Read
// Update
// Delete

export default `

  type User {
    id: String!
    accountid: String!
    gymid: String!
    name: String!
    lastName: String!
    birthday: String!
    status: String!
  }

  type Query {
    getUser(id: String!): User!
    allUsers: [User!]!
  }

  type Mutation {
    createUser(id: String!, accountid: String!, gymid: String!, name: String!, lastName: String!, birthday: String!, status: String!): User!
  }

`;
