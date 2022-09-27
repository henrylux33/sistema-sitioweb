const { Router }  = require('express');
const router = Router();

router.get('/ventas/agregar', (req, res) => {
    res.render('VENTAS/ventas-p');
    
});


module.exports = router;