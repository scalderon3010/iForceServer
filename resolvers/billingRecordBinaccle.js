export default {
    Query: {
      getBillingRecordBinaccle: (parent, { id }, { models }) => models.BillingRecordBinaccle.findOne({ where: { id } }),
      allBillingRecordBinaccles: (parent, args, { models }) => models.BillingRecordBinaccle.findAll(),
    },
    Mutation: {
      createBillingRecordBinaccle: (parent, args, { models }) => models.BillingRecordBinaccle.create(args),
    },
  };
  