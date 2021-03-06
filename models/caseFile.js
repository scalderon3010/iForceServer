export default (sequelize, DataTypes) => {
    const CaseFile = sequelize.define('caseFile', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      userId: DataTypes.STRING,
      observations : DataTypes.STRING,
      objective: DataTypes.STRING,
      initialBodyMesurements: DataTypes.STRING
    },{
       timestamps: false,
    });
  
    CaseFile.associate = (models) => {
        CaseFile.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'});
        CaseFile.hasMany(models.InjuriesCaseFile, {foreignKey: 'caseFileId',sourceKey: 'id'});
    };


    return CaseFile;
};
  

/*

CaseFile
-> id (pk)
-> userId (fk)
-> observations
-> objective
-> initialBodyMesurements

*/