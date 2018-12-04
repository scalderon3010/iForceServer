export default (sequelize, DataTypes) => {
  const BillingRecord = sequelize.define('billingRecord', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    agreementId: DataTypes.STRING,
    billId : DataTypes.STRING,
    paymentDate: DataTypes.STRING,
    expirationDate: DataTypes.STRING,
    status: DataTypes.STRING,

  },{
     timestamps: false,
  });

 BillingRecord.associate = (models) => {
  BillingRecord.belongsTo(models.Agreement, {foreignKey: 'agreementId', targetKey: 'id'});
  BillingRecord.belongsTo(models.Bill, {foreignKey: 'billId', targetKey: 'id'});
};

  return BillingRecord;
};


/**
  BillingRecord (actual)
-> id (local enumeration) (pk)
-> agreement
-> billId (fk)
-> paymentDate
-> expirationDate
-> status (check it!)

 */