const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const Payment = sequelize.define("payment", {
  paymentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentTime: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
});

module.exports = Payment;
