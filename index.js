const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({});
})

const rutasInventario = require("./inventario/inventario.route")
app.use('/inventario', rutasInventario);

const rutasConsumo = require("./consumo/consumo.route")
app.use('/consumo', rutasConsumo);

const rutasChequeo = require("./chequeo/chequeo.route")
app.use('/chequeo', rutasChequeo);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.error(error))

app.listen(8083);