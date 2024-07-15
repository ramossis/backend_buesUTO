const Posicion = require('../models/Posicion')
const PosicionController={}

PosicionController.getPosicion=async(req,res)=>{
    try {
        const user = await Posicion.getPosicion();
        res.status(200).json(user);
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching posicion' });
    }
}
PosicionController.createPosicion=async(req,res)=>{
    try {
        const data=req.body;
        const user = await Posicion.setPosicion(data);
        res.status(200).json({
            message:'Posicion Registrado correctamente',
            user
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching posicion' });
    }
}
PosicionController.findPosicionId=async(req,res)=>{
    try {
        const {id}=req.params
        const posicion = await Posicion.findPosicionbyId(id);
        res.status(200).json({
            message:'Posicion Encontrado',
            posicion
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching posicion' });
    }
}
PosicionController.updatePosicion=async(req,res)=>{
    try {
        const data=req.body
        const {id}=req.params
        const posicion = await Posicion.updatePosicion(data,id);
        res.status(200).json({
            message:'Posicion Actualizado',
            posicion
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching posicion' });
    }
}
PosicionController.deletePosicion=async(req,res)=>{
    try {
        const {id}=req.params
        const posicion = await Posicion.deletePosicion(id);
        res.status(200).json({
            message:'Posicion Eliminado',
            posicion
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching user' });
    }
}

module.exports=PosicionController