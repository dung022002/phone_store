const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const Position = sequelize.define("position", {
  positionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_update: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
});

module.exports = Position;
