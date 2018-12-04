export default (sequelize, DataTypes) => {
    const Exercise = sequelize.define('exercise', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      muscleGroup : DataTypes.STRING
    },{
       timestamps: false,
    });
  
    return Exercise;
};

Exercise.associate = (models) => {
  Exercise.hasMany(models.WorkoutProgramExercise, {foreignKey: 'exerciseId',sourceKey: 'id'});
};
  
/*

Exercice
-> id
-> name
-> muscleGroup

*/