const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const reservation = sequelize.define('reservation', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startDate: {
            type: 'TIMESTAMP',
            allowNull: false
        },
        endDate: {
            type: 'TIMESTAMP',
            allowNull: false
        }
    },{
      timestamps: false,
      freezeTableName: true,
      tableName: 'client'
  });
  
    reservation.associate = (models) => {
      reservation.belongsTo(models.client, {
        foreignKey: 'idclient'
      });
    };
  
    return reservation;
  };