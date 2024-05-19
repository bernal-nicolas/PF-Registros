const mongoose = require("mongoose");

const schemaChequeo = new mongoose.Schema({
    IDGanado: {type: String, required: true},
    // Parametros todavia no definidos
    isActive: { type: Boolean, required: true, default: true } // Soft Delete
  }, {
    versionKey: false,
    timestamps: true
});
  
const Chequeo = mongoose.model('Chequeo', schemaChequeo);

module.exports = Chequeo;