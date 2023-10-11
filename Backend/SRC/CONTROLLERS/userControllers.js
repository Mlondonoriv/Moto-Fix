const bcrypt = require("bcryptjs"); // importando el modulo bcrypt para encriptar la contrasena

const user_model = require("../models/userModel"); // importando el archivo con los modelos y esquemas

const get_token = require("../HELPERS/gets");

// creando mis controladores dentro de un objeto con propiedades

//

const user_controller = {
  // la funcion debe ser asincrona, necesito tiempo para que interactue con la base de datos
  // los endpoint recibimos peticiones de nuestro cliente, en este caso es postman ( request)
  // a esto le damos una respuesta

  // usamos try catch que se ejecute el try, y si se produce un error la respuesta cae en el catch

  createUser: async (request, response) => {
    try {
      const { username, firstName, lastName, email, password, address, phone } =
        request.body; // en el request viene el cuerpo de la funcion y estoy destructurando el body

      // me retorna una contrasena encriptada guardada en la
      const hash_password = await bcrypt.hash(password, 10); // constante para encriptar la contrasena gracias al metodo hash importado del modulo bcrypt

      // usando el modelo impiortado y estoy creando una nueva usuario con la nueva estructura usandola contrasena iencriptada y remplazando el valor nuevo
      const new_user = new user_model({
        username,
        firstName,
        lastName,
        email,
        password: hash_password,
        address,
        phone,
      });

      const user_created = await new_user.save(); // constante guardo el usuario ya creado , y con metodo save , el nuevo modelo se va a la base de datos y lo guarda
      //si todo sale bien moongosse me trae el usuario ya creado

      // en la constante token , gracias funcion jwt esta espeando el payload, los datos que debo guardar en el token
      // en este caso quiero guardar el id y el username, esto lo puedo hacer porque el usuario
      // ya esta creado
      const token = await get_token({
        id: user_created._id,
        username: user_created.username,
      });

      response.json(token);
    } catch (error) {
      response.json({ message: "fail creating a user" });
    }
  },

  // la funcion me retorno o el token o un error

  //==================================================================== GET ALL USERS =====================================

  getAllUsers: async (request, response) => {
    try {
      const all_users = await user_model.find();

      response.json({ all_users });
    } catch (error) {
      response.json({ message: "Failed reading all users" });
    }
  },

  //===================================================================== GET SINGLE USER ==============================

  getSingleUser: async (request, response) => {
    try {
      const user = await user_model.findById(request.params.id);
      if (user) response.json({ user });
      else throw new Error("user not found");
    } catch (error) {
      response.json({ error: error.message || "Fail reading user!!" });
    }
  },

  //============================================================================== UPDATE USER ===================================

  // le pido que lo encuentre y lo actualice

  updateUser: async (request, response) => {
    try {
      const { username, firstName, lastName, email, password, address, phone } =
        request.body;
      // en el request viene el cuerpo de la funcion y estoy destructurando el body
      let update_user = null;

      if (password) {
        const hash_password = await bcrypt.hash(password, 10);
        update_user = await user_model.findByIdAndUpdate(request.params.id, {
          username,
          firstName,
          lastName,
          email,
          password: hash_password,
          address,
          phone,
        });
      } else {
        update_user = await user_model.findByIdAndUpdate(request.params.id, {
          username,
          firstName,
          lastName,
          email,
          address,
          phone,
        });
      }
      // me retorna una contrasena encriptada guardada en la

      if (updated_user) response.json({ update_user: update_user._id });
      else throw new Error("user not found");
    } catch (error) {
      response.json({ error: error.message || "Fail updating user" });
    }
  },

  //=========================================================================== DELETE USER ============================================

  deleteUser: async (request, response) => {
    try {
      const deleted_user = await user_model.findByIdAndDelete(
        request.params.id
      );

      if (deleted_user) response.json({ deleted_user: deleted_user._id });
      else throw Error("User not found");
    } catch (error) {
      response.json({ error: error.message || "Fail deleting the user!!" });
    }
  },
};

module.exports = user_controller; // exportando mis controladores
