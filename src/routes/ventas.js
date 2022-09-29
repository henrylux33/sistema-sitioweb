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

router.get('/ventas/editar/:id', async (req, res) => {
    try {
        const ventas = await Ventas.findById(req.params.id).lean();
    
    res.render('VENTAS/ventas-editar', { ventas: ventas });
    }
    catch (error) {
        console.log(error.message);
    }
    
});

router.post('/ventas/editar/:id', async (req, res) => {
    const { id } = req.params;
    await Ventas.findByIdAndUpdate(id, req.body);

    res.redirect('/ventas/ver-ventas')
});

module.exports = router;