const { Router }  = require('express');
const Ventas = require('../models/ventas')
const router = Router();

router.get('/ventas/agregar1', (req, res) => {
    res.render('VENTAS/ventas-p');
    
});

router.post('/ventas/agregar', async (req, res) => {
    const ventas = Ventas(req.body);
    await ventas.save();
    res.redirect('/ventas/agregar1');
})

router.get('/ventas/ver-ventas', async (req, res) => {
    const ver = await Ventas.find().lean();
   
    res.render('VENTAS/verventas', { ver: ver });
    
});

module.exports = router;