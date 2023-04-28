const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../sequelize");

const OrderPhone = sequelize.define("order_phone", {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  phoneId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = OrderPhone;
