export default (sequelize, DataTypes) => {
  const MembershipApplication = sequelize.define('membershipApplication', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: DataTypes.STRING,
    gymId: DataTypes.STRING,
    applicationDate: DataTypes.STRING,
    approvalDate: DataTypes.STRING,
    status: DataTypes.STRING,
  },{
     timestamps: false,
  });

 MembershipApplication.associate = (models) => {
  MembershipApplication.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'});
  MembershipApplication.belongsTo(models.Gym, {foreignKey: 'gymId', targetKey: 'id'});
};

  return MembershipApplication;
};

/*

MembershipApplication:

-> id
-> userId
-> gymId
-> applicationDate
-> approvalDate (can be null)
-> status

*/