export default (sequelize, DataTypes) => {
    const Bill = sequelize.define('bill', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      accountId: DataTypes.STRING,
      gymId: DataTypes.STRING,
    },{
       timestamps: false,
    });
  
   Bill.associate = (models) => {
    Bill.belongsTo(models.Account, {foreignKey: 'accountId', targetKey: 'id'});
    Bill.belongsTo(models.Gym, {foreignKey: 'gymId', targetKey: 'id'});
  };
  
    return Bill;
  };
  

  /*

  Bills (Needs to have all the attributes on digital bills (MH))
  -> id
  -> gym
  -> client
  
  */