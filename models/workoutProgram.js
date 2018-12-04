export default (sequelize, DataTypes) => {
    const WorkoutProgram = sequelize.define('workoutProgram', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      caseFileId: DataTypes.STRING,
      trainerId: DataTypes.STRING,
      comments: DataTypes.STRING,
      observations: DataTypes.STRING,
      objective: DataTypes.STRING,
      workoutsWeek: DataTypes.STRING,
    },{
       timestamps: false,
    });
    
    WorkoutProgram.associate = (models) => {
      WorkoutProgram.belongsTo(models.CaseFile, {foreignKey: 'caseFileId', targetKey: 'id'});
      WorkoutProgram.belongsTo(models.Trainer, {foreignKey: 'trainerId', targetKey: 'id'});
      WorkoutProgram.hasMany(models.WorkoutProgramExercise, {foreignKey: 'workoutProgramId',sourceKey: 'id'});
  };

    return WorkoutProgram;
  };
  

  /*
  
  WorkoutProgram
-> id
-> Casefile
-> trainer
-> comments
-> Observations
-> Objective
-> Workouts/Week
  
  */