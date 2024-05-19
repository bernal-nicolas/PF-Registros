const Chequeo = require("./chequeo.model");

async function getChequeoMongo(filtros) {
    filtros.isActive = true;
    const chequeosFiltrados = await Chequeo.find(filtros);
    
    return chequeosFiltrados;
}

async function createChequeoMongo(datos) {
    const chequeoCreado = await Chequeo.create(datos);

    return chequeoCreado;
}

async function updateChequeoMongo(id, cambios) {
    const resultado = await Chequeo.findByIdAndUpdate(id, cambios);

    return resultado;
}

async function deleteChequeoMongo(id) {
    const resultado = await Chequeo.findByIdAndUpdate(id, { isActive: false }, { new: true });

    return resultado;
}

module.exports = {
    createChequeoMongo,
    getChequeoMongo,
    updateChequeoMongo,
    deleteChequeoMongo
};


