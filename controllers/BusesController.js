const Buses = require('../models/Buses')
const BusesController={}

BusesController.getBuses=async(req,res)=>{
    try {
        const buses = await Buses.getBuses();
        res.status(200).json(buses);
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Buses' });
    }
}
BusesController.createBuses=async(req,res)=>{
    try {
        const data=req.body;
        const buses = await Buses.setBuses(data);
        res.status(200).json({
            message:'Buses Registrado correctamente',
            buses
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Buses' });
    }
}
BusesController.findBusesId=async(req,res)=>{
    try {
        const {id}=req.params
        const buses = await Buses.findBusesbyId(id);
        res.status(200).json({
            message:'Buses Encontrado',
            buses
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Buses' });
    }
}
BusesController.updateBuses=async(req,res)=>{
    try {
        const data=req.body
        const {id}=req.params
        const buses = await Buses.updateBuses(data,id);
        res.status(200).json({
            message:'Buses Actualizado',
            buses
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching Buses' });
    }
}
BusesController.deleteBuses=async(req,res)=>{
    try {
        const {id}=req.params
        const buses = await Buses.deleteBuses(id);
        res.status(200).json({
            message:'Buses Eliminado',
            buses
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching buses' });
    }
}

module.exports=BusesController