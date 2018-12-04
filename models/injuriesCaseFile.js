export default (sequelize, DataTypes) => {
    const InjurieCaseFile = sequelize.define('injurieCaseFile', {
      caseFileId: DataTypes.STRING,
      injurieId: DataTypes.STRING,
      severity: DataTypes.STRING
    },{
       timestamps: false,
    });
    
    InjurieCaseFile.associate = (models) => {
        InjurieCaseFile.belongsTo(models.CaseFile, {foreignKey: 'caseFileId', targetKey: 'id'});
        InjurieCaseFile.belongsTo(models.Injurie, {foreignKey: 'injurieId', targetKey: 'id'});    
    };

    return InjurieCaseFile;
};

/*

InjuriesCaseFile

-> caseFileId
-> injurieId
-> Severity

*/