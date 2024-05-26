const mongoose = require("mongoose");

const schemaChequeo = new mongoose.Schema({
  IDGanado: { type: String, required: true },
  fecha: { type: Date, required: true },
  peso: { type: String, required: true },
  estatura: { type: String, required: true },
  temperaturaCorporal: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true } // Soft Delete 
}, {
  versionKey: false,
  timestamps: true
});

const Chequeo = mongoose.model('Chequeo', schemaChequeo);

module.exports = Chequeo;