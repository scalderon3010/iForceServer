import Sequelize from 'sequelize';

const sequelize = new Sequelize('iForce', 'postgres', 'root', {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const models = {
  User: sequelize.import('./user'),
  Account: sequelize.import('./account'),
  Gym: sequelize.import('./gym')
  
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;

export default models;
