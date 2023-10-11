const bcrypt = require("bcryptjs"); // imprto el modulo para poder comparar las contrasenas 

const user_model = require("../models/userModel");

const get_token = require("../HELPERS/gets");


const loginController = {

    loginUser: async(request, response) => {

        try {

            const{email, password} = request.body;
            const user_found = await user_model.findOne({email});

            if (user_found) {
                const is_valid_password = await bcrypt.compare( password, user_found.password );
                
                if (is_valid_password) {

                    const token = await get_token({
                        id:user_found._id,
                        name: user_found.name,
                    });
                    response.json(token);
                    
                } else {
                    response.json({message: "credenciales invalidas"});
                    
                }
                
            } else {
                response.json({message: "credenciales invalidas"})
                
            }
            
        } catch (error) {
            response.json({message: "Error durante el logea del usario"})
            
        }
    }

   

};


module.exports = loginController;