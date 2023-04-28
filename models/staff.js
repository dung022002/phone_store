const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const StaffPosition = require("./staff_position");

const Staff = sequelize.define("staff", {
  staffId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
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
Staff.hasMany(StaffPosition);

module.exports = Staff;
