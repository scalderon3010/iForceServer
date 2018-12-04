export default {
    Query: {
      getAgreement: (parent, { id }, { models }) => models.Agreement.findOne({ where: { id } }),
      allAgreements: (parent, args, { models }) => models.Agreement.findAll(),
    },
    Mutation: {
      createAgreement: (parent, args, { models }) => models.Agreement.create(args),
    },
  };
  