const { Schema, model } = require('mongoose');

const menu = new Schema({
    titulo: String,
    descripcion: String,
    imageURL: String,
    public_id: String
});

module.exports = model('Menu', menu);


