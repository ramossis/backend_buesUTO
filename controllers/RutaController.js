const Ruta = require('../models/Ruta')
const RutaController={}

RutaController.getRuta=async(req,res)=>{
    try {
        const ruta = await Ruta.getRuta();
        res.status(200).json(ruta);
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Ruta' });
    }
}
RutaController.createRuta=async(req,res)=>{
    try {
        const data=req.body;
        const ruta = await Ruta.setRuta(data);
        res.status(200).json({
            message:'Ruta Registrado correctamente',
            ruta
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Ruta' });
    }
}
RutaController.findRutaId=async(req,res)=>{
    try {
        const {id}=req.params
        const ruta = await Ruta.findRutabyId(id);
        res.status(200).json({
            message:'Ruta Encontrado',
            ruta
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Ruta' });
    }
}
RutaController.updateRuta=async(req,res)=>{
    try {
        const data=req.body
        const {id}=req.params
        const ruta = await Ruta.updateRuta(data,id);
        res.status(200).json({
            message:'Ruta Actualizado',
            ruta
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Ruta' });
    }
}
RutaController.deleteRuta=async(req,res)=>{
    try {
        const {id}=req.params
        const ruta = await Ruta.deleteRuta(id);
        res.status(200).json({
            message:'Ruta Eliminado',
            ruta
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching ruta' });
    }
}

module.exports=RutaController