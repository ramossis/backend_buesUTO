const express =require('express')
const CuentaController = require('../controllers/CuentaController')

const router=express.Router()

router.get('/listado',CuentaController.getCuenta)
router.post('/crear',CuentaController.createCuenta)
router.delete('/eliminar/:id',CuentaController.deleteCuenta)
router.get('/mostrar/:id',CuentaController.findCuentaId)
router.put('/actualizar/:id',CuentaController.updateCuenta)

module.exports=router