export default {
    Query: {
      getWorkoutProgram: (parent, { id }, { models }) => models.WorkoutProgram.findOne({ where: { id } }),
      allWorkoutPrograms: (parent, args, { models }) => models.WorkoutProgram.findAll(),
    },
    Mutation: {
      createWorkoutProgram: (parent, args, { models }) => models.WorkoutProgram.create(args),
    },
  };
  