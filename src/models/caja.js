const { Schema, model } = require('mongoose');

const caja = new Schema({
    fecha: {
        type: Date,
        dafaault: new Date()
    },
    no: Number,
    fechainicio: Number,
    fechacierre: Number,
    apertura: String,
    cierre: Number,
    venta: Number,
    estado: String,
   

});

module.exports = model('Caja', caja);