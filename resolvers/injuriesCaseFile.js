export default {
    Query: {
      getInjuriesCaseFile: (parent, { id }, { models }) => models.InjuriesCaseFile.findOne({ where: { id } }),
      allInjuriesCaseFiles: (parent, args, { models }) => models.InjuriesCaseFile.findAll(),
    },
    Mutation: {
      createInjuriesCaseFile: (parent, args, { models }) => models.InjuriesCaseFile.create(args),
    },
  };
  