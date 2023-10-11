

const jwt =  require("jsonwebtoken"); // importando el modulo para generar tokens 




//declarando la funcion que recibe como parametro payload ( son los datos que quiero que se guarden en el token )
// la nueva poromesa su estado es pendiente, si se puede reesolver retorno el metodo resolve, si hay un error retorno reject
// dentro de la promesa utilizo el modulo importado para utilizar metodo sign( recibo los datos que quiero guardar en el token)
// recive una llave secreta ( esta en mi variable de entorno )
// almmetodo le doy tiempo de expiracion al token 
//por ultimo ejecuto la funcion una ves se ejecute el metodo , ahi ontengo el error o el token


function getToken(payload){

    return new Promise((resolve, reject) => {

        jwt.sign(
            payload,
            process.env.JWT_KEY,
            {expiresIn: "1d"},
            (err, token)=> {

                if (err){
                    reject({err});
                } else {
                    resolve({token});
                }
            }
        );
    });
}
 


module.exports = getToken;  // exportando la funcion para encriptar la contrasena .