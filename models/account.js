export default (sequelize, DataTypes) => {
  const Account = sequelize.define('account', {
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
