const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const Customer = sequelize.define("customer", {
  customerId: {
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
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
  lastUpdate: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
});

module.exports = Customer;
