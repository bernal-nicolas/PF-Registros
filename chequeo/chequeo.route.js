const express = require('express');
const router = express.Router();
const { readChequeoConFiltros, createChequeo, updateChequeo, deleteChequeo } = require("./chequeo.controller");
const { respondWithError } = require('../utils/functions');
const { authenticateToken } = require('../middleware/auth');

async function GetChequeos(req, res) {
    try {
        const resultadosBusqueda = await readChequeoConFiltros(req.query);
        res.status(200).json(resultadosBusqueda);
    } catch (e) {
        respondWithError(res, e);
    }
}

async function PostChequeo(req, res) {
    try {
        await createChequeo(req.body);
        res.status(201).json({ mensaje: "Chequeo creado con éxito." });
    } catch (e) {
        respondWithError(res, e);
    }
}

async function PatchChequeos(req, res) {
    try {
        await updateChequeo(req.body);

        res.status(200).json({
            mensaje: "Éxito. 👍"
        });
    } catch (e) {
        respondWithError(res, e);
    }
}

async function DeleteChequeos(req, res) {
    try {
        await deleteChequeo(req.params.id);

        res.status(200).json({
            mensaje: "Éxito. 👍"
        });
    } catch (e) {
        respondWithError(res, e);
    }
}

router.get("/", authenticateToken, GetChequeos);
router.post("/", authenticateToken, PostChequeo);
router.patch("/", authenticateToken, PatchChequeos);
router.delete("/:id", authenticateToken, DeleteChequeos);

module.exports = router;

