export default (sequelize, DataTypes) => {
    const BillingRecordBinaccle = sequelize.define('billingRecordBinaccle', {
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
  
   BillingRecordBinaccle.associate = (models) => {
    BillingRecordBinaccle.belongsTo(models.Agreement, {foreignKey: 'agreementId', targetKey: 'id'});
    BillingRecordBinaccle.belongsTo(models.Bill, {foreignKey: 'billId', targetKey: 'id'});
  };
  
    return BillingRecordBinaccle;
  };
  
  /*
  
  BillingRecordBinaccle (Inserted by a trigger when i update BillingRecord [billId, paymentDate and expirationDate]) -> AFTER UPDATE TRIGGER
-> id
-> agreement
-> billId (fk)
-> paymentDate
-> expirationDate
-> status (check it!)
  
  */