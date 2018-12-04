export default {
    Query: {
      getWorkoutProgramExercise: (parent, { id }, { models }) => models.WorkoutProgramExercise.findOne({ where: { id } }),
      allWorkoutProgramExercises: (parent, args, { models }) => models.WorkoutProgramExercise.findAll(),
    },
    Mutation: {
      createWorkoutProgramExercise: (parent, args, { models }) => models.WorkoutProgramExercise.create(args),
    },
  };
  