const Brand = require("../models/brand");

async function allBrand() {
  const data = await Brand.findAll();
  return data;
}

async function create(data) {
  const newBrand = await Brand.create(data);
  return newBrand;
}

module.exports = { create, allBrand };
