

const {Router} = require("express"); // imprtando el modulo de express

const loginController = require("../CONTROLLERS/loginControllers");  // importando los controladores 

const router = Router(); // guardando el servidor en la constante 

router.post("/", loginController.loginUser);  // creando la ruta para hacer la peticion 



module.exports = router;  // exportando las rutas 