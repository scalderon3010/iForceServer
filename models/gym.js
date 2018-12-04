export default (sequelize, DataTypes) => {
  const Gym = sequelize.define('gym', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true      
    },
    accountid: DataTypes.STRING,
    juridicalid: DataTypes.STRING,
    MHKey: DataTypes.STRING,
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    location: DataTypes.STRING,
    owner: DataTypes.STRING
  },{
     timestamps: false,
  });
 Gym.associate = (models) => {
  Gym.belongsTo(models.Account, {foreignKey: 'accountid', targetKey: 'id'});
};

  return Gym;
};

/*

Gym:
-> id (local enumeration)
-> account (fk)
-> juridical id
-> MH Key
-> name
-> phonenumber
-> location
-> owner

*/
