export default (sequelize, DataTypes) => {
    const WorkOutProgram = sequelize.define('workOutProgram', {
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
    
   WorkOutProgram.associate = (models) => {
    WorkOutProgram.belongsTo(models.CaseFile, {foreignKey: 'caseFileId', targetKey: 'id'});
    WorkOutProgram.belongsTo(models.Trainer, {foreignKey: 'trainerId', targetKey: 'id'});
  };
  
    return WorkOutProgram;
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