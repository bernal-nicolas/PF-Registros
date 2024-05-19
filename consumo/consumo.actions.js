const Consumo = require("./consumo.model");

async function getConsumoMongo(filtros) {
    filtros.isActive = true;
    const consumosFiltrados = await Consumo.find(filtros);
    
    return consumosFiltrados;
}

async function createConsumoMongo(datos) {
    const consumoCreado = await Consumo.create(datos);

    return consumoCreado;
}

async function updateConsumoMongo(id, cambios) {
    const resultado = await Consumo.findByIdAndUpdate(id, cambios);

    return resultado;
}

async function deleteConsumoMongo(id) {
    const resultado = await Consumo.findByIdAndUpdate(id, { isActive: false }, { new: true });

    return resultado;
}

module.exports = {
    createConsumoMongo,
    getConsumoMongo,
    updateConsumoMongo,
    deleteConsumoMongo
};

