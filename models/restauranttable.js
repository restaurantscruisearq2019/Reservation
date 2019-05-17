const Sequelize = require('sequelize');

module.exports =  (sequelize, DataTypes) => {
    const restauranttable = sequelize.define('restauranttable', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        TableNumber: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'client'
    });

    return restauranttable;
  };