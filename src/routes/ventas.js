const { Router }  = require('express');
const Ventas = require('../models/ventas')
const router = Router();

router.get('/ventas/ingresar', (req, res) => {
    res.render('VENTAS/ventas-formulario');
    
});

router.post('/ventas/agregar', async (req, res) => {
    const ventas = Ventas(req.body);
    await ventas.save();
    res.redirect('/ventas/ingresar');
});

router.get('/ventas/ver-ventas', async (req, res) => {
    const ver = await Ventas.find().lean();
   
    res.render('VENTAS/verventas', { ver: ver });
    
});

module.exports = router;