export default {
    Query: {
      getBill: (parent, { id }, { models }) => models.Bill.findOne({ where: { id } }),
      allBills: (parent, args, { models }) => models.Bill.findAll(),
    },
    Mutation: {
      createBill: (parent, args, { models }) => models.Bill.create(args),
    },
  };
  