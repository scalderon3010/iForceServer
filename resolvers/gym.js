export default {
  Query: {
    getGym: (parent, { id }, { models }) => models.Gym.findOne({ where: { id } }),
    allGyms: (parent, args, { models }) => models.Gym.findAll()
    //allGymsWithAccount: (parent, args, { models }) => models.Gym.findOne({ where: {id}, include: [User]}),
  },
  Mutation: {
    createGym: (parent, args, { models }) => models.Gym.create(args),
  },
};
