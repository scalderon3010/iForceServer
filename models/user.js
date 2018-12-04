export default (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    accountid: DataTypes.STRING,
    gymid: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthday: DataTypes.STRING,
    status: DataTypes.STRING,

  },{
     timestamps: false,
  });

 User.associate = (models) => {
  User.belongsTo(models.Account, {foreignKey: 'accountid', targetKey: 'id'});
  User.belongsTo(models.Gym, {foreignKey: 'gymid', targetKey: 'id'});
};

  return User;
};

/*


User:
-> id (local enumeration) (pk)
-> account (fk)
-> gym (fk) (could be null)
-> id (registry id)
-> name
-> lastName
-> birthday
-> status (active, suspended) [check it!]

*/