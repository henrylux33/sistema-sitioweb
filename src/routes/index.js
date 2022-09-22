const { Router }  = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Funcionando');
});

router.get('/inicio', (req, res) => {
    res.render('sistemaweb');
    
});

router.get('/sitio', (req, res) => {
    res.render('sitioweb');
});





module.exports = router;