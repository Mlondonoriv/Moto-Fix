const { Schema, model } = require("mongoose");

const moto_schema = new Schema({
  brand: { type: String, require: true },
  model: { type: String, require: true },
  year: { type: Date, require: true },
  plate: { type: String, require: true },
  name:{type:String,require:true},
  contact_phone:{type:Number, require:true},
  email:{type:String, require:true},
  issue_description:{type:String, require:true},

 
},
{
    timestamps:true, versionkey:false
  }
);



module.exports = model("Moto_Service_collection", moto_schema);

