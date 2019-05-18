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
        }
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'client'
    });

    client.associate = (models) => {
        client.belongsTo(models.group, {
          foreignKey: 'groupid'
        });
      };
  
    return client;
  };