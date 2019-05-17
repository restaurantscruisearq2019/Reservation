const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const client = sequelize.define('client', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        restaurant: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
  
    return client;
  };