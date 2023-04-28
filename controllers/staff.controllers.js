const express = require("express");
const { allStaff, create } = require("../services/staff.service");
const staffRouter = express.Router();

staffRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const newStaff = await create(body);
    return res.status(200).json(newStaff);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

staffRouter.get("/", async (req, res) => {
  const response = await allStaff();
  return res.json(response);
});

module.exports = { router: staffRouter, route: "/staffs" };
