export default {
    Query: {
      getBillingRecord: (parent, { id }, { models }) => models.BillingRecord.findOne({ where: { id } }),
      allBillingRecords: (parent, args, { models }) => models.BillingRecord.findAll(),
    },
    Mutation: {
      createBillingRecord: (parent, args, { models }) => models.BillingRecord.create(args),
    },
  };
  