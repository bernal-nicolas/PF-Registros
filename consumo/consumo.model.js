const mongoose = require("mongoose");

const schemaConsumo = new mongoose.Schema({
    IDGanado: {type: String, required: true},
    IDConsumible: {type: String, required: true},
    cantidadConsumo: {type: Number, required: true},
    fechaConsumo: {type: Date, required: true},
    isActive: { type: Boolean, required: true, default: true } // Soft Delete
  }, {
    versionKey: false,
    timestamps: true
});
  
const Consumo = mongoose.model('Consumo', schemaConsumo);

module.exports = Consumo;