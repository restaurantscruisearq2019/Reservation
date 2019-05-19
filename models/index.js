const Sequelize = require('sequelize');

const sequelize = new Sequelize('reservationdb', 'developer', 'whygodwhy', {
  dialect: 'postgres',
  host: 'db'
});

const models = {
  client: sequelize.import('./client'),
  reservedgroup: sequelize.import('./reservedgroup'),
  group: sequelize.import('./group')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;