export default `

  type BodyMesurements {
    id: String!
    workoutProgramId: String!
    date: String!
    size: String!
    weight: String!
    muscleKg: String!
    rightArm: String!
    leftArm: String!
    rightLeg: String!
    leftLeg: String!
    metabolism: String!
    visceralFat: String!
    bones: String!
    waterPercentage: String!
    bloodPressure: String!
    waist: String!
    hip: String!
    chest: String!
    rightBicep: String!
    leftBicep: String!
    rightQuadricep : String!
    leftQuadricep : String!
    rightVastus : String!
    leftVastus: String!
    rightCalf: String!
    leftCalf: String!
  }

  type Query {
    getBodyMesurements(id: String!): User!
    allBodyMesurementss: [BodyMesurements!]!
  }

  type Mutation {
    createBodyMesurements(id: String!, workoutProgramId: String!, date: String!, size: String!, weight: String!, muscleKg: String!, rightArm: String!, leftArm: String!, rightLeg: String!, leftLeg: String!, metabolism: String!, visceralFat: String!, bones: String!, waterPercentage: String!, bloodPressure: String!, waist: String!, hip: String!, chest: String!, rightBicep: String!, leftBicep: String!, rightQuadricep : String!, leftQuadricep : String!, rightVastus : String!, leftVastus: String!, rightCalf: String!, leftCalf: String!): BodyMesurements!
  }

`;

/*
  BodyMesurements

-> id (pk)
-> workoutProgramId (fk)
-> date
-> size
-> weight
-> muscleKg
-> rightArm
-> leftArm
-> rightLeg
-> leftLeg
-> ab (Preguntar qué es)
-> metabolism
-> visceralFat
-> bones
-> waterPercentage
-> bloodPressure
-> waist
-> hip
-> chest
-> rightBicep
-> leftBicep
-> rightQuadricep 
-> leftQuadricep 
-> rightVastus 
-> leftVastus
-> rightCalf
-> leftCalf

*/