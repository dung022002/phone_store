const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize");
const Brand = sequelize.define("brand", {
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  brandName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  lastUpdate: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
});
module.exports = Brand;
