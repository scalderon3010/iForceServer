export default {
    Query: {
      getInjurie: (parent, { id }, { models }) => models.Injurie.findOne({ where: { id } }),
      allInjuries: (parent, args, { models }) => models.Injurie.findAll(),
    },
    Mutation: {
      createInjurie: (parent, args, { models }) => models.Injurie.create(args),
    },
  };
  