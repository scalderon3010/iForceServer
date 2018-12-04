export default (sequelize, DataTypes) => {
    const BodyMesurements = sequelize.define('bodyMesurements', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      workoutProgramId: DataTypes.STRING,
      date : DataTypes.STRING,
      size: DataTypes.STRING,
      weight: DataTypes.STRING,
      muscleKg: DataTypes.STRING,
      RightArm: DataTypes.STRING,
      LeftArm: DataTypes.STRING,
      Metabolism: DataTypes.STRING,
      VisceralFat: DataTypes.STRING,
      Bones: DataTypes.STRING,
      WaterPercentage: DataTypes.STRING,
      BloodPressure: DataTypes.STRING,
      Waist: DataTypes.STRING,
      Hip: DataTypes.STRING,
      Chest: DataTypes.STRING,
      RightBicep: DataTypes.STRING,
      LeftBicep: DataTypes.STRING,
      RightQuadricep: DataTypes.STRING,
      LeftQuadricep: DataTypes.STRING,
      RightVastus: DataTypes.STRING,
      LeftVastus: DataTypes.STRING,
      RightCalf: DataTypes.STRING,
      LeftCalf: DataTypes.STRING,
    },{
       timestamps: false,
    });
    
   BodyMesurements.associate = (models) => {
    BodyMesurements.belongsTo(models.WorkoutProgram, {foreignKey: 'workoutProgramId', targetKey: 'id'});
  };
  
    return BodyMesurements;
  };
  

/*
  BodyMesurements

-> id (pk)
-> WorkoutProgram (fk)
-> date
-> size
-> weight
-> muscleKg
-> RightArm
-> LeftArm
-> RightLeg
-> LeftLeg
-> Ab (Preguntar qué es)
-> Metabolism
-> Visceral Fat
-> Bones
-> Water %
-> Blood Pressure
-> Waist 1/2
-> Hip
-> Chest
-> Right Bicep
-> Left Bicep
-> Right Quadricep 
-> Left Quadricep 
-> Right Vastus 
-> Left Vastus
-> Calf

*/