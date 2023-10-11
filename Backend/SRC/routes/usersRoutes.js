const { Router } = require("express");

const user_controller = require("../CONTROLLERS/userControllers"); // dejar todo en misnusculas los nombres de las caarpetas , cambiar

const user_routes = Router();

// probando los endpoints en postman
// user_routes.post("/", (request, response)=> {response.json({message: "create user"})});
// user_routes.get("/", (request, response)=> {response.json({message: "read all users"})});
// user_routes.get("/:id", (request, response)=> {response.json({message: "read user"})});
// user_routes.put("/:id", (request, response)=> {response.json({message: "update user"})});
// user_routes.delete("/:id", (request, response)=> {response.json({message: "delete user"})});

user_routes.post("/", user_controller.createUser);
user_routes.get("/", user_controller.getAllUsers);
user_routes.get("/:id", user_controller.getSingleUser);
user_routes.put("/:id", user_controller.updateUser);
user_routes.delete("/:id", user_controller.deleteUser);

// trayendo los controlodaros para usar las rutas

module.exports = user_routes;
