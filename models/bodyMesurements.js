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
      rightArm: DataTypes.STRING,
      leftArm: DataTypes.STRING,
      metabolism: DataTypes.STRING,
      visceralFat: DataTypes.STRING,
      bones: DataTypes.STRING,
      waterPercentage: DataTypes.STRING,
      bloodPressure: DataTypes.STRING,
      waist: DataTypes.STRING,
      hip: DataTypes.STRING,
      chest: DataTypes.STRING,
      rightBicep: DataTypes.STRING,
      leftBicep: DataTypes.STRING,
      rightQuadricep: DataTypes.STRING,
      leftQuadricep: DataTypes.STRING,
      rightVastus: DataTypes.STRING,
      leftVastus: DataTypes.STRING,
      rightCalf: DataTypes.STRING,
      leftCalf: DataTypes.STRING,
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
-> workoutProgramId (fk)
-> date
-> size
-> weight
-> muscleKg
-> rightArm
-> leftArm
-> rightLeg
-> leftLeg
-> ab (Preguntar qué es)
-> metabolism
-> visceralFat
-> bones
-> waterPercentage
-> bloodPressure
-> waist
-> hip
-> chest
-> rightBicep
-> leftBicep
-> rightQuadricep 
-> leftQuadricep 
-> rightVastus 
-> leftVastus
-> rightCalf
-> leftCalf

*/