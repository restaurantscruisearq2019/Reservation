const Sequelize = require('sequelize');

const sequelize = new Sequelize('reservetable', 'developer', 'whygodwhy', {
  dialect: 'postgres'
});

const models = {
  client: sequelize.import('./client'),
  reservation: sequelize.import('./reservation'),
  tablereserved: sequelize.import('./tablereserved'),
  restauranttable: sequelize.import('./restauranttable'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;