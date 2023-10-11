// const { response } = require("express");
const moto_model = require("../models/motoModel"); // trayendo el modulo creado por mi
// const motoModel = require("../models/motoModel");

const moto_controller = {
  createMoto: async (request, response) => {
    try {
      const { brand,
        model,
        year,
        plate,
        name,
        contact_phone,
        email,
        issue_description } = request.body;

      const newMoto = new moto_model({
        brand,
        model,
        year,
        plate,
        name,
        contact_phone,
        email,
        issue_description
      });
      const motoCreated = await newMoto.save();

      if (motoCreated) {
        response.json({
          message: "Moto created Succsesfully",
          motoCreated: motoCreated._id,
        });
      } else throw new Error("Moto not created");
    } catch (error) {
      response.json({ erro: "An error acurred creating a Moto" });
    }
  },

  getAllMotos: async (request, response) => {
    try {
      const all_motos = await moto_model.find();
      response.json({ all_motos });
    } catch (error) {
      response.json({ error: "error while reading all Motos" });
    }
  },

  getSingleMoto: async (request, response) => {
    try {
      const single_moto = await moto_model.findById(request.params.id);

      if (single_moto) {
        response.json({
          message: ` Moto id: ${single_moto._id}, ${single_moto.brand} ${single_moto.model}`,
        });
      } else throw new Error("Unable to obtain moto");
    } catch (error) {
      response.json({ error: "reading Moto has Failed" });
    }
  },

  UpdateMoto: async (request, response) => {
    try {
      const moto_update = await moto_model.findByIdAndUpdate(
        request.params.id,
        request.body
      );

      if (moto_update) {
        response.json({
          moto_updated: ` Moto id: ${moto_update._id}, ${moto_update.brand} - ${moto_update.model} has been updated succesfully`,
        });
      } else throw new Error("Unable to update Moto");
    } catch (error) {
      response.json({ error: "An error Ocurred trying to update moto" });
    }
  },

  deleteMoto: async (request, response) => {
    try {
      const moto_deleted = await moto_model.findByIdAndDelete(
        request.params.id
      );

      if (moto_deleted) {
        response.json({
          moto_deleted: `Moto id:${moto_deleted._id} has been succsefuly deleted`,
        });
      } else throw new Error("Unable to delete Moto");
    } catch (error) {
      response.json({
        error: "An error has ocurred and Moto cannot be deleted",
      });
    }
  },
};

module.exports = moto_controller;
