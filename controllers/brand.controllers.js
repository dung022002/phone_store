const express = require("express");
const { allBrand, create } = require("../services/brand.service");
const brandRouter = express.Router();

brandRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const newBrand = await create(body);
    return res.status(200).json(newBrand);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

brandRouter.get("/", async (req, res) => {
  const response = await allBrand();
  return res.json(response);
});

module.exports = { router: brandRouter, route: "/brands" };
