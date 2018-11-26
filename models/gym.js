export default (sequelize, DataTypes) => {
  const Gym = sequelize.define('gym', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true      
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.STRING
  });

  return Account;
};
