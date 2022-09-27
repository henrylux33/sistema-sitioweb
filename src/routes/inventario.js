const { Router }  = require('express');
const router = Router();

router.get('/sistema/inventario/agregar', (req, res) => {
    res.render('INVENTARIO/inventario1');         
    
});


module.exports = router;