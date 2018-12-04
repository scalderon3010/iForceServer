export default (sequelize, DataTypes) => {
    const Trainer = sequelize.define('Trainer', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true      
      },
      accountId: DataTypes.STRING,
      gymId: DataTypes.STRING,
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      birthday: DataTypes.STRING

    },{
     	timestamps: false,
  	});

    Trainer.associate = (models) => {
	  Trainer.belongsTo(models.Account, {foreignKey: 'accountId', targetKey: 'id'});
	  Trainer.belongsTo(models.Gym, {foreignKey: 'gymId', targetKey: 'id'});
	};
  
    return Trainer;
  };
  

/*

Trainer
-> id (local enumeration)
-> accountId (fk)
-> gymId (fk) 
-> name
-> lastName
-> phoneNumber
-> birthday

*/