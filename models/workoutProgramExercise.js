export default (sequelize, DataTypes) => {
    const WorkoutProgramExercise = sequelize.define('WorkoutProgramExercise', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      workoutProgramId: DataTypes.STRING,
      exerciseId: DataTypes.STRING,
      sets: DataTypes.STRING,
      reps: DataTypes.STRING
    },{
       timestamps: false,
    });
    
   WorkoutProgramExercise.associate = (models) => {
    WorkoutProgramExercise.belongsTo(models.WorkoutProgram, {foreignKey: ' workoutProgramId', targetKey: 'id'});
    WorkoutProgramExercise.belongsTo(models.Exercise, {foreignKey: 'exerciseId', targetKey: 'id'});
  };
  
    return WorkoutProgramExercise;
  };
  

  /*

  WorkoutProgramExercise
-> workoutProgramId
-> exerciseId
-> sets
-> reps

  */