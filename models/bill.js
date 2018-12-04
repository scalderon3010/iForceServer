export default (sequelize, DataTypes) => {
    const Bill = sequelize.define('bill', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      gymId: DataTypes.STRING,
      userId: DataTypes.STRING,
    },{
       timestamps: false,
    });
  
   Bill.associate = (models) => {
    Bill.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'});
    Bill.belongsTo(models.Gym, {foreignKey: 'gymId', targetKey: 'id'});
  };
  
    return Bill;
  };
  

  /*

  Bills (Needs to have all the attributes on digital bills (MH))
  -> id
  -> gymId
  -> userId

  */