
// importando mongoose , me provee los esquemas y modelos para trabajr con mongo db base de datos 

// de mongoose voy a extraer el mode y el esquema , el esquema  para decvir como quiero que este estructurado el dsocumentio que voy aguardar en la base de datos 

// model me permite usar la funcionalidad 


const { Schema, model} = require("mongoose");

const user_schema = new Schema(

    {
        username:{type: String, require: true},
        firstName:{type: String, require: true},
        lastName:{type: String, require: true},
        email:{type: String, require: true},
        password:{type: String, require: true},
        address:{type: String, require: true},
        phone:{type: String, require: true},
       
    },
    {
        timestamps: true, versionKey: false
    }
);




module.exports = model("userModel", user_schema) //  EL STRING userModel es el nombre que voy a generar en la base de datos .