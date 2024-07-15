const express =require('express')
const BusesController = require('../controllers/BusesController')

const router=express.Router()

router.get('/listado',BusesController.getBuses)
router.post('/crear',BusesController.createBuses)
router.delete('/eliminar/:id',BusesController.deleteBuses)
router.get('/mostrar/:id',BusesController.findBusesId)
router.put('/actualizar/:id',BusesController.updateBuses)

module.exports=router