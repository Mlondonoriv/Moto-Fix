const { Router } = require("express");

const product_controllers = require("../CONTROLLERS/productControllers");

const product_routes = Router();

product_routes.post("/", product_controllers.createproduct);
product_routes.get("/", product_controllers.getAllproducts);
product_routes.get("/:id", product_controllers.getSingleproduct);
product_routes.put("/:id", product_controllers.Updateproduct);
product_routes.delete("/:id", product_controllers.deleteproduct);

module.exports = product_routes;
