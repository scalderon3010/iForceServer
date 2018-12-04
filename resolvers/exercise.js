export default {
    Query: {
      getExercise: (parent, { id }, { models }) => models.Exercise.findOne({ where: { id } }),
      allExercises: (parent, args, { models }) => models.Exercise.findAll(),
    },
    Mutation: {
      createExercise: (parent, args, { models }) => models.Exercise.create(args),
    },
  };
  