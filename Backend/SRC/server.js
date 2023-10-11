
const cors = require("cors"); // para poder comunicarme entre dos servidores distintos 
const express = require("express");    // importando el modulo de express 

const morgan = require("morgan");  // imnportando morgan 

const user_routes = require("./routes/usersRoutes");  // importando las rutas de los endpoints 
const moto_routes = require("./routes/motoRoutes"); //importando las rutas de los endpoints de motos 
const login_routes = require("./routes/loginRoutes");

const product_routes = require("./routes/productRoutes");



const server = express();   // creando un servidor  en la constante server 

const port = 5000

// const port = process.env.PORT;  // especificando por que puerto estoy escuchando las peticiones

server.set("port", port);   // al serviddor establecerle un puerto segun el valor de la constante port 

server.use(express.json()) // esto activa que el servidor entienda el json

server.use(morgan("dev"));   // importando morgan para visualizar cuando le hago peticiones al servidor 

server.use(cors()); // usando la dependencia cors 

// a mi serrvidor con el metodo get , recibo 2 argumentos / representa la ruta raiz de mi proyecto ( en mi maquina localhost:400)
// cuando llega la peticion a esa ruta , ejecuto la funcion, esta funcion recibe la peticion ( reuqest y maneja una respuesta (response))
// cuando responde recibo un json con el emnsaje de respuesta

// toda la funcionalidad lo pongo en mi archivo server 
server.use("/login/",login_routes);
server.use("/users/",user_routes); 
server.use("/products/",product_routes); 


// le estoy diciendo que use la ruta users que el nombre se lo asigno yo para poder llamar los endpoints 
server.use("/motos",moto_routes);
server.get("/",(request, response) => {
    // response.json({message:" hola desde la ruta raiz"})
    response.send(" hola desde la ruta raiz")
});



module.exports = server;  // exoortando mi server para poder usarlo dentro de mi archivo index 