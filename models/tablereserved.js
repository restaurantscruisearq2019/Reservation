const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const tablereserved = sequelize.define('tablereserved', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'client'
    });
  
    tablereserved.associate = (models) => {
        
        tablereserved.belongsTo(models.restauranttable, {
            foreignKey: 'idtable'
        });

        tablereserved.belongsTo(models.reservation, {
            foreignKey: 'idreservation'
        });
    };
  
    return tablereserved;
  };