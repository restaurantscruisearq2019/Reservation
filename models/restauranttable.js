const Sequelize = require('sequelize');

module.exports =  (sequelize, DataTypes) => {
    const restauranttable = sequelize.define('reservation', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        TableNumber: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return restauranttable;
  };