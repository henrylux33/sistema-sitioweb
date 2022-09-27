const { Router }  = require('express');
const Ventas = require('../models/ventas')
const router = Router();

router.get('/ventas/agregar1', (req, res) => {
    res.render('VENTAS/ventas-p');
    
});

router.post('/ventas/agregar', async (req, res) => {
    const ventas = Ventas(req.body);
    
    const vguardado = await ventas.save();
    console.log(vguardado);
    
    res.send('Guardado')
})

module.exports = router;