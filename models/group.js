const Sequelize = require('sequelize');

module.exports =  (sequelize, DataTypes) => {
    const group = sequelize.define('group', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'group'
    });

    return group;
  };