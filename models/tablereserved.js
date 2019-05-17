const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const tablereserved = sequelize.define('reservation', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
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