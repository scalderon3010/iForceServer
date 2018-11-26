// CRUD
// Create
// Read
// Update
// Delete

export default `

  type User {
    username: String!
    password: String!
  }

  type Query {
    getUser(username: String!): User!
    allUsers: [User!]!
  }

  type Mutation {
    createUser(username: String, password: String!): User!
  }

`;
