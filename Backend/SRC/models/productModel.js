const { Schema, model } = require("mongoose");

const product_schema = new Schema(
  {
    
    name: { type: String, require: true },
    price: { type: String, require: true },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

module.exports = model("ProductModelCollection", product_schema);
