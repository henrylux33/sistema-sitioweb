const { Router }  = require('express');
const Ventas = require('../models/ventas');
const { ingresar, ingresarBD, tabla, editar, editarBD, eliminar } = require('../controllers/ventas.controllers.js');

const router = Router();


router.get('/ventas/ingresar', ingresar);

router.post('/ventas/agregar', ingresarBD);

router.get('/ventas/ver-ventas', tabla);

router.get('/ventas/editar/:id', editar);

router.post('/ventas/editar/:id', editarBD);

router.get('/ventas/borrar/:id', eliminar);

module.exports = router;