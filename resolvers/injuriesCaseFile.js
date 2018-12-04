export default {
    Query: {
      allInjuriesByCaseFile: (parent, { id }, { models }) => models.InjuriesCaseFile.findAll({ where: { caseFileId: id }, include: [models.Injurie] }),
    },
    Mutation: {
      createInjuriesCaseFile: (parent, args, { models }) => models.InjuriesCaseFile.create(args),
    },
  };
  