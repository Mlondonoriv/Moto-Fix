// ARCHIVO ENCARGADO DE CONECTARSE A LA BASE DE DATOS 


const mongoose = require("mongoose"); // importando el modulo mongoose, se encarga del manejo de base de datos 

mongoose
.connect(process.env.MONGO_DB_URI)
.then((db) => console.log('conectado a databse'))
.catch((err) => console.log('error al conectarse a la database '));