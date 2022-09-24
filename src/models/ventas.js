const { Schema, model } = require('mongoose');

const ventas = new Schema({
    fecha: {
        type: Date,
        dafaault: new Date()
    },
    nombreCliente: String,
    nit: Number,
    telefono: Number,
    entrada: String,
    platillo: String,
    bebida: String,
    postre: String,
    tipo_pago: String,
    empleado: String,

});

module.exports = model('Ventas', ventas);


