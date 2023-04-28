const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const OrderPhone = require("./order_phone");

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  staffId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Order.hasMany(OrderPhone, {
  as: "phones",
  foreignKey: "orderId",
  onDelete: "cascade",
});
OrderPhone.belongsTo(Order, {
  as: "order",
  foreignKey: "orderId",
  onDelete: "cascade",
});

module.exports = Order;
