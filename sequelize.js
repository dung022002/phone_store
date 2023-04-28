const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "flagship phone store",
  "postgres",
  "02102002",
  {
    query: { raw: true },
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = { sequelize };
