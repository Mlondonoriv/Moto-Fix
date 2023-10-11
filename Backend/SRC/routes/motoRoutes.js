const { Router } = require("express");

const moto_controllers = require("../CONTROLLERS/motoControllers");

const moto_routes = Router();

moto_routes.post("/", moto_controllers.createMoto);
moto_routes.get("/", moto_controllers.getAllMotos);
moto_routes.get("/:id", moto_controllers.getSingleMoto);
moto_routes.put("/:id", moto_controllers.UpdateMoto);
moto_routes.delete("/:id", moto_controllers.deleteMoto);

module.exports = moto_routes;
