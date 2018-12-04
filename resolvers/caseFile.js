export default {
    Query: {
      getCaseFile: (parent, { id }, { models }) => models.CaseFile.findOne({ where: { id } }),
      allCaseFiles: (parent, args, { models }) => models.CaseFile.findAll(),
    },
    Mutation: {
      createCaseFile: (parent, args, { models }) => models.CaseFile.create(args),
    },
  };
  