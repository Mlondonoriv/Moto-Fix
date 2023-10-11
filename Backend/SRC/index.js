
//cuando ejecuto el seridor con npm , va a buscar mi archivo index, el modulo dotenv, me permite trabajar con las variabvles de entorno, me deja saber que esxiste el archivo .env.

// 

require("dotenv").config(); //importando y ejecutando el metodo config de la dependencia dotenv

require("./database");  // importando el archivo de database para poder tener la coneccion a la base de datos  uso./ cuando el modulo es creado por mi

const server = require("./server");

const port = server.get("port");


server.listen(port, ()=> {
    console.log(`server is running in port ${port}`);
    
});