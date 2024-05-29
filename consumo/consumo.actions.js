const Consumo = require("./consumo.model");

async function getConsumoMongo(filtros) {
    userID = filtros.userID
    delete filtros.userID
    filtros.isActive = true
    filtros["ganadoInfo.userID"] = userID
    const consumosFiltrados = await Consumo.aggregate([
      {
        $addFields: {
          ganadoObjectId: { $toObjectId: "$IDGanado" }
        }
      },
      {
        $lookup: {
          from: "ganados", // Nombre de la colección Ganado en plural
          localField: "ganadoObjectId",
          foreignField: "_id",
          as: "ganadoInfo"
        }
      },
      {
        $unwind: "$ganadoInfo"
      },
      // Filtrar por userID del usuario proporcionado
      {
        $match: filtros
      },
      // Select!
      {
        $project: {
          _id: 1,
          IDGanado: 1,
          IDConsumible: 1,
          cantidadConsumo: 1,
          fechaConsumo: 1,
          ganadoID: 1,
          isActive: 1,
          createdAt: 1,
          updatedAt: 1,
          ganadoInfo: 1
        }
      }
    ])
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

