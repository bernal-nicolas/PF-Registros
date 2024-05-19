const Inventario = require("./inventario.model");

async function getInventarioMongo(filtros) {
    filtros.isActive = true;
    const inventariosFiltrados = await Inventario.find(filtros);
    
    return inventariosFiltrados;
}

async function createInventarioMongo(datos) {
    const inventarioCreado = await Inventario.create(datos);

    return inventarioCreado;
}

async function updateInventarioMongo(id, cambios) {
    const resultado = await Inventario.findByIdAndUpdate(id, cambios);

    return resultado;
}

async function deleteInventarioMongo(id) {
    const resultado = await Inventario.findByIdAndUpdate(id, { isActive: false }, { new: true });

    return resultado;
}

module.exports = {
    createInventarioMongo,
    getInventarioMongo,
    updateInventarioMongo,
    deleteInventarioMongo
};
