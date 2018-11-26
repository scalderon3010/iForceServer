export default {
  Query: {
    getUser: (parent, { username }, { models }) => models.User.findOne({ where: { username } }),
    allUsers: (parent, args, { models }) => models.User.findAll(),
  },
  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
  },
};
