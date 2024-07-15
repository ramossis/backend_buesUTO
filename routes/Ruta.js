const express =require('express')
const RutaController = require('../controllers/RutaController')

const router=express.Router()

router.get('/listado',RutaController.getRuta)
router.post('/crear',RutaController.createRuta)
router.delete('/eliminar/:id',RutaController.deleteRuta)
router.get('/mostrar/:id',RutaController.findRutaId)
router.put('/actualizar/:id',RutaController.updateRuta)

module.exports=router