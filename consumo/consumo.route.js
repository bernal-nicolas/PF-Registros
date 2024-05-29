const express = require('express');
const router = express.Router();
const { readConsumoConFiltros, createConsumo, updateConsumo, deleteConsumo } = require("./consumo.controller");
const { respondWithError } = require('../utils/functions');
const { authenticateToken, getTokenID } = require('../middleware/auth');

async function GetConsumos(req, res) {
    try {
        req.query.userID = getTokenID(req)
        const resultadosBusqueda = await readConsumoConFiltros(req.query);
        res.status(200).json(resultadosBusqueda);
    } catch (e) {
        respondWithError(res, e);
    }
}

async function PostConsumo(req, res) {
    try {
        await createConsumo(req.body);
        res.status(201).json({ mensaje: "Consumo creado con éxito." });
    } catch (e) {
        respondWithError(res, e);
    }
}

async function PatchConsumos(req, res) {
    try {
        await updateConsumo(req.body);

        res.status(200).json({
            mensaje: "Éxito. 👍"
        });
    } catch (e) {
        respondWithError(res, e);
    }
}

async function DeleteConsumos(req, res) {
    try {
        await deleteConsumo(req.params.id);

        res.status(200).json({
            mensaje: "Éxito. 👍"
        });
    } catch (e) {
        respondWithError(res, e);
    }
}

router.get("/", authenticateToken, GetConsumos);
router.post("/", authenticateToken, PostConsumo);
router.patch("/", authenticateToken, PatchConsumos);
router.delete("/:id", authenticateToken, DeleteConsumos);

module.exports = router;
