const express = require('express');
const router = express.Router();
const { readInventarioConFiltros, createInventario, updateInventario, deleteInventario } = require("./inventario.controller");
const { respondWithError } = require('../utils/functions');
const { authenticateToken } = require('../middleware/auth');

async function GetInventarios(req, res) {
    try {
        const resultadosBusqueda = await readInventarioConFiltros(req.query);

        res.status(200).json({
            ...resultadosBusqueda
        });
    } catch (e) {
        res.status(500).json({ msg: "" });
    }
}

async function PostInventario(req, res) {
    try {
        await createInventario(req.body);
        res.status(201).json({ mensaje: "Inventario creado con éxito." });
    } catch (e) {
        respondWithError(res, e);
    }
}

async function PatchInventarios(req, res) {
    try {
        await updateInventario(req.body);

        res.status(200).json({
            mensaje: "Éxito. 👍"
        });
    } catch (e) {
        respondWithError(res, e);
    }
}

async function DeleteInventarios(req, res) {
    try {
        await deleteInventario(req.params.id);

        res.status(200).json({
            mensaje: "Éxito. 👍"
        });
    } catch (e) {
        respondWithError(res, e);
    }
}

router.get("/", authenticateToken, GetInventarios);
router.post("/", authenticateToken, PostInventario);
router.patch("/", authenticateToken, PatchInventarios);
router.delete("/:id", authenticateToken, DeleteInventarios);

module.exports = router;

