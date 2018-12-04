export default {
    Query: {
      getTrainer: (parent, { id }, { models }) => models.Trainer.findOne({ where: { id } }),
      allTrainers: (parent, args, { models }) => models.Trainer.findAll(),
    },
    Mutation: {
      createTrainer: (parent, args, { models }) => models.Trainer.create(args),
    },
  };
  