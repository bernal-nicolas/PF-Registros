const { createChequeoMongo, getChequeoMongo, updateChequeoMongo, deleteChequeoMongo } = require("./chequeo.actions");

async function readChequeoConFiltros(query) {
    const resultadosBusqueda = await getChequeoMongo(query);
    return resultadosBusqueda;
}

async function createChequeo(datos) {
    const chequeoCreado = await createChequeoMongo(datos);
    return chequeoCreado;
}

function updateChequeo(datos) {
    const { _id, ...cambios } = datos;
    const chequeoActualizado = updateChequeoMongo(_id, cambios);
    return chequeoActualizado;
}

function deleteChequeo(id) {
    const chequeoEliminado = deleteChequeoMongo(id);
    return chequeoEliminado;
}

module.exports = {
    readChequeoConFiltros,
    createChequeo,
    updateChequeo,
    deleteChequeo
};