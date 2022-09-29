const { Router }  = require('express');
const caja = require('../models/caja')
const router = Router();

router.get('/caja/agregar1', (req, res) => {
    res.render('CAJA1/caja2');
    
});

router.post('/caja/agregar', async (req, res) => {
    const caja = Ventas(req.body);
    
    const vguardado = await caja.save();
    console.log(vguardado);

    res.send('Guardado')
})

module.exports = router;