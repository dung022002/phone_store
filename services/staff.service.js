const Staff = require("../models/staff");

async function allStaff() {
  const data = await Staff.findAll();
  return data;
}

async function create(data) {
  const newStaff = await Staff.create(data);
  return newStaff;
}

module.exports = { allStaff, create };
