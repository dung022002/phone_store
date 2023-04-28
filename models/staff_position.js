const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const StaffPosition = sequelize.define("staff_position", {
  staffId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  positionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lastUpdate: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});
module.exports = StaffPosition;

//file, variable, function  camelCase
//class, interface PascalCase
