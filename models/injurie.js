export default (sequelize, DataTypes) => {
    const Injurie = sequelize.define('injurie', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      bodyPart: DataTypes.STRING,
      description: DataTypes.STRING
    },{
       timestamps: false,
    });
  
    return Injurie;
};

Injurie.associate = (models) => {
  Injurie.hasMany(models.InjurieCaseFile, {foreignKey: 'injurieId',sourceKey: 'id'});
};

/*

Injurie
-> id
-> bodyPart
-> description


*/