// const { response } = require("express");
const product_model = require("../models/productModel"); // trayendo el modulo creado por mi
// const productModel = require("../models/productModel");

const product_controller = {
  createproduct: async (request, response) => {
    try {
      const { name, price} = request.body;

      const newproduct = new product_model({
       name,
       price,
      });
      const productCreated = await newproduct.save();

      if (productCreated) {
        response.json({
          message: "product created Succsesfully",
          productCreated: productCreated._id,
        });
      } else throw new Error("product not created");
    } catch (error) {
      response.json({ erro: "An error acurred creating a product" });
    }
  },

  getAllproducts: async (request, response) => {
    try {
      const all_products = await product_model.find();
      response.json({ all_products });
    } catch (error) {
      response.json({ error: "error while reading all products" });
    }
  },

  getSingleproduct: async (request, response) => {
    try {
      const single_product = await product_model.findById(request.params.id);

      if (single_product) {
        response.json({
          message: ` product id: ${single_product._id}, ${single_product.name} `,
        });
      } else throw new Error("Unable to obtain product");
    } catch (error) {
      response.json({ error: "reading product has Failed" });
    }
  },

  Updateproduct: async (request, response) => {
    try {
      const product_update = await product_model.findByIdAndUpdate(
        request.params.id,
        request.body
      );

      if (product_update) {
        response.json({
          product_updated: ` product id: ${product_update._id}, ${product_update.name}  has been updated succesfully`,
        });
      } else throw new Error("Unable to update product");
    } catch (error) {
      response.json({ error: "An error Ocurred trying to update product" });
    }
  },

  deleteproduct: async (request, response) => {
    try {
      const product_deleted = await product_model.findByIdAndDelete(
        request.params.id
      );

      if (product_deleted) {
        response.json({
          product_deleted: `product id:${product_deleted._id} has been succsefuly deleted`,
        });
      } else throw new Error("Unable to delete product");
    } catch (error) {
      response.json({
        error: "An error has ocurred and product cannot be deleted",
      });
    }
  },
};

module.exports = product_controller;
