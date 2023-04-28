const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const Warranty = sequelize.define("warranty", {
  warrantyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  paymentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  warrantyStart: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  warrantyEnd: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
module.exports = Warranty;
