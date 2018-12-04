export default `

  type BodyMesurements {
    id: String!
    username: String!
    password: String!
    email: String!
    type: String!
    status: String!
  }

  type Query {
    getBodyMesurements(id: String!): User!
    allBodyMesurementss: [BodyMesurements!]!
  }

  type Mutation {
    createBodyMesurements(id: String!, username: String!, password: String!, email: String!, type: String!, status: String!): BodyMesurements!
  }

`;