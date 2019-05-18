const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const reservedgroup = sequelize.define('reservedgroup', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        startdate: {
          type: 'TIMESTAMP',
          allowNull: false
        },
        enddate: {
          type: 'TIMESTAMP',
          allowNull: false
        },
        restaurantid: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
    },{
      timestamps: false,
      freezeTableName: true,
      tableName: 'reservedgroup'
  });
  
  reservedgroup.associate = (models) => {
      reservedgroup.belongsTo(models.group, {
        foreignKey: 'groupid'
      });
    };
  
    return reservedgroup;
  };