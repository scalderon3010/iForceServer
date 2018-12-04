export default (sequelize, DataTypes) => {
    const Agreement = sequelize.define('agreement', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true      
      },
      gymId: DataTypes.STRING,
      userId: DataTypes.STRING,
      paymentType: DataTypes.STRING,
      paymentPeriod: DataTypes.STRING,
      date: DataTypes.STRING,
      status: DataTypes.STRING,
      amounts: DataTypes.STRING
    });

    Agreement.associate = (models) => {
      Agreement.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'});
      Agreement.belongsTo(models.Gym, {foreignKey: 'gymId', targetKey: 'id'});
    };
  
    return Agreement;
  };
  

/*
Agreement
-> id (Pk)
-> gymId
-> userId
-> paymentType
-> paymentPeriod (monthly, trimester, semester, yearly)
-> date
-> status (ACTIVE, INACTIVE)
-> amounts
*/