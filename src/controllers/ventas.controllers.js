const Ventas = require('../models/ventas');

const ingresar = (req, res) => {
    res.render('VENTAS/ventas-formulario');
    
};

const ingresarBD = async (req, res) => {
    const ventas = Ventas(req.body);
    await ventas.save();
    res.redirect('/ventas/ingresar');
}

const tabla = async (req, res) => {
    const ver = await Ventas.find().lean();
   
    res.render('VENTAS/verventas', { ver: ver });
    
}

const editar = async (req, res) => {
    try {
        const ventas = await Ventas.findById(req.params.id).lean();
    
    res.render('VENTAS/ventas-editar', { ventas: ventas });
    }
    catch (error) {
        console.log(error.message);
    }   
}

const editarBD = async (req, res) => {
    const { id } = req.params;
    await Ventas.findByIdAndUpdate(id, req.body);

    res.redirect('/ventas/ver-ventas')
}

const eliminar = async (req, res) => {
    const { id } = req.params;
    await Ventas.findByIdAndDelete(id);
    res.redirect('/ventas/ver-ventas');
}

module.exports = {
    ingresar,
    ingresarBD,
    tabla,
    editar,
    editarBD,
    eliminar
};