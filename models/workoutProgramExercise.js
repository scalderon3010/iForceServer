export default (sequelize, DataTypes) => {
    const WorkOutProgramExercise = sequelize.define('workOutProgramExercise', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      workOutProgramId: DataTypes.STRING,
      exerciseId: DataTypes.STRING,
      sets: DataTypes.STRING,
      reps: DataTypes.STRING
    },{
       timestamps: false,
    });
    
   WorkOutProgramExercise.associate = (models) => {
    WorkOutProgramExercise.belongsTo(models.WorkOutProgram, {foreignKey: ' workOutProgramId', targetKey: 'id'});
    WorkOutProgramExercise.belongsTo(models.Exercise, {foreignKey: 'exerciseId', targetKey: 'id'});
  };
  
    return WorkOutProgramExercise;
  };
  

  /*

  WorkoutProgramExercise
-> workoutProgramId
-> exerciseId
-> sets
-> reps

  */