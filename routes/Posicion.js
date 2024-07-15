const express =require('express')
const PosicionController = require('../controllers/PosicionController')

const router=express.Router()

router.get('/listado',PosicionController.getPosicion)
router.post('/crear',PosicionController.createPosicion)
router.delete('/eliminar/:id',PosicionController.deletePosicion)
router.get('/mostrar/:id',PosicionController.findPosicionId)
router.put('/actualizar/:id',PosicionController.updatePosicion)

module.exports=router