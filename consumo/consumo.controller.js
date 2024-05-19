const { createConsumoMongo, getConsumoMongo, updateConsumoMongo, deleteConsumoMongo } = require("./consumo.actions");

async function readConsumoConFiltros(query) {
    const resultadosBusqueda = await getConsumoMongo(query);
    return resultadosBusqueda;
}

async function createConsumo(datos) {
    const consumoCreado = await createConsumoMongo(datos);
    return consumoCreado;
}

function updateConsumo(datos) {
    const { _id, ...cambios } = datos;
    const consumoActualizado = updateConsumoMongo(_id, cambios);
    return consumoActualizado;
}

function deleteConsumo(id) {
    const consumoEliminado = deleteConsumoMongo(id);
    return consumoEliminado;
}

module.exports = {
    readConsumoConFiltros,
    createConsumo,
    updateConsumo,
    deleteConsumo
};


