const { createInventarioMongo, getInventarioMongo, updateInventarioMongo, deleteInventarioMongo } = require("./inventario.actions");

async function readInventarioConFiltros(query) {
    const resultadosBusqueda = await getInventarioMongo(query);
    return resultadosBusqueda;
}

async function createInventario(datos) {
    const inventarioCreado = await createInventarioMongo(datos);
    return inventarioCreado;
}

function updateInventario(datos) {
    const { _id, ...cambios } = datos;
    const inventarioActualizado = updateInventarioMongo(_id, cambios);
    return inventarioActualizado;
}

function deleteInventario(id) {
    const inventarioEliminado = deleteInventarioMongo(id);
    return inventarioEliminado;
}

module.exports = {
    readInventarioConFiltros,
    createInventario,
    updateInventario,
    deleteInventario
};

