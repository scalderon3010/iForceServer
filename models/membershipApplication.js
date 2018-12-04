export default (sequelize, DataTypes) => {
  const MembershipApplication = sequelize.define('membershipApplication', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    accountId: DataTypes.STRING,
    gymId: DataTypes.STRING,
    status: DataTypes.STRING,
    applicationDate: DataTypes.STRING,
    approvalDate: DataTypes.STRING,
    status: DataTypes.STRING,
  },{
     timestamps: false,
  });

 MembershipApplication.associate = (models) => {
  MembershipApplication.belongsTo(models.Account, {foreignKey: 'accountId', targetKey: 'id'});
  MembershipApplication.belongsTo(models.Gym, {foreignKey: 'gymId', targetKey: 'id'});
};

  return MembershipApplication;
};

/*

MembershipApplication:
-> id
-> username
-> gym
-> status
-> applicationDate
-> approvalDate (can be null)

*/