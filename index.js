const { sequelize } = require("./sequelize");
const OrderPhone = require("./models/order_phone");
const Phone = require("./models/phone");
const Order = require("./models/order");
const Payment = require("./models/payment");
const Customer = require("./models/customer");
const Position = require("./models/position");
const StaffPosition = require("./models/staff_position");
const Warranty = require("./models/warranty");
const Staff = require("./models/staff");
const controllers = require("./controllers");
const express = require("express");

sequelize.sync({ force: false }).then(console.log("Successful !!"));
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//app.use("/brands", brandRouter);
for (const controller of controllers) {
  const { route, router } = controller;
  app.use(route, router);
}

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
