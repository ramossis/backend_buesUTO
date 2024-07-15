const express =require('express')
const UsuarioController = require('../controllers/UsuarioController')

const router=express.Router()

router.get('/listado',UsuarioController.getUsuario)
router.post('/crear',UsuarioController.createUsuario)
router.delete('/eliminar/:id',UsuarioController.deleteUsuario)
router.get('/mostrar/:id',UsuarioController.findUsuarioId)
router.put('/actualizar/:id',UsuarioController.updateUsuario)

module.exports=router