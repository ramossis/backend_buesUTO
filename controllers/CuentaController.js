const Cuenta = require('../models/Cuenta')
const CuentaController={}

CuentaController.getCuenta=async(req,res)=>{
    try {
        const cuenta = await Cuenta.getCuenta();
        res.status(200).json(cuenta);
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Cuenta' });
    }
}
CuentaController.createCuenta=async(req,res)=>{
    try {
        const data=req.body;
        const cuenta = await Cuenta.setCuenta(data);
        res.status(200).json({
            message:'Cuenta Registrado correctamente',
            cuenta
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Cuenta' });
    }
}
CuentaController.findCuentaId=async(req,res)=>{
    try {
        const {id}=req.params
        const cuenta = await Cuenta.findCuentabyId(id);
        res.status(200).json({
            message:'Cuenta Encontrado',
            cuenta
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Cuenta' });
    }
}
CuentaController.updateCuenta=async(req,res)=>{
    try {
        const data=req.body
        const {id}=req.params
        const cuenta = await Cuenta.updateCuenta(data,id);
        res.status(200).json({
            message:'Cuenta Actualizado',
            cuenta
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Cuenta' });
    }
}
CuentaController.deleteCuenta=async(req,res)=>{
    try {
        const {id}=req.params
        const cuenta = await Cuenta.deleteCuenta(id);
        res.status(200).json({
            message:'Cuenta Eliminado',
            cuenta
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching cuenta' });
    }
}

module.exports=CuentaController