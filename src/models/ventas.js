const { Schema, model } = require('mongoose');

const ventas = new Schema({
    nombreCliente: String,
    nit: Number,
    telefono: Number,
    entrada: String,
    platillo: String,
    bebida: String,
    postre: String,
    tipo_pago: String,
    empleado: String
    },
    {
        timestamps: true,
        versionkey: false
    }
);

module.exports = model('Ventas', ventas);


