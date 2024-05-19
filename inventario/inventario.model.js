const mongoose = require("mongoose");

const schemaInventario = new mongoose.Schema({
    userID: {type: String, required: true},
    nombre: {type: String, required: true},
    cantidad: {type: Number, required: true},
    fechaCompra: {type: Date, required: true},
    fechaExp: {type: Date, required: true},
    isActive: { type: Boolean, required: true, default: true } // Soft Delete
  }, {
    versionKey: false,
    timestamps: true
});
  
const Inventario = mongoose.model('Inventario', schemaInventario);

module.exports = Inventario;