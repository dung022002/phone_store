const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const OrderPhone = require("./order_phone");

const Phone = sequelize.define("phone", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  modelName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  launch: {
    type: DataTypes.DATE,
  },
  bodyDimensions: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  display: {
    type: DataTypes.STRING,
  },
  chipset: {
    type: DataTypes.STRING,
  },
  camera: {
    type: DataTypes.STRING,
  },
  memory: {
    type: DataTypes.STRING,
  },
  storage: {
    type: DataTypes.STRING,
  },
  batteryAndCharge: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
  },
  stocking: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  lastUpdate: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
});

Phone.hasMany(OrderPhone, { as: "orders", foreignKey: "phoneId" });
OrderPhone.belongsTo(Phone, { as: "phone", foreignKey: "phoneId" });

module.exports = Phone;
