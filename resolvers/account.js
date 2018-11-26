export default {
  Query: {
    getAccount: (parent, { username }, { models }) => models.Account.findOne({ where: { id } }),
    allAccounts: (parent, args, { models }) => models.Account.findAll(),
  },
  Mutation: {
    createAccount: (parent, args, { models }) => models.Account.create(args),
  },
};
