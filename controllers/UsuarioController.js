const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const UsuarioController={}

UsuarioController.getUsuario=async(req,res)=>{
    try {
        const user = await Usuario.getUsuario();
        res.status(200).json(user);
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching user' });
    }
}
UsuarioController.createUsuario=async(req,res)=>{
    try {
        const data=req.body;
        const hashedPassword = await bcrypt.hash(password,10)
        data.password=hashedPassword;
        const user = await Usuario.setUsuario(data);
        res.status(200).json({
            message:'Usuario Registrado correctamente',
            user
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching user' });
    }
}
UsuarioController.findUsuarioId=async(req,res)=>{
    try {
        const {id}=req.params
        const user = await Usuario.findUsuariobyId(id);
        res.status(200).json({
            message:'Usuario Encontrado',
            user
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching user' });
    }
}
UsuarioController.updateUsuario=async(req,res)=>{
    try {
        const data=req.body
        const {id}=req.params
        const user = await Usuario.updateUsuario(data,id);
        res.status(200).json({
            message:'Usuario Actualizado',
            user
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching user' });
    }
}
UsuarioController.deleteUsuario=async(req,res)=>{
    try {
        const {id}=req.params
        const user = await Usuario.deleteUsuario(id);
        res.status(200).json({
            message:'Usuario Eliminado',
            user
        });
    } catch (error) {
        console.error('Error executing query:', error);
         res.status(500).json({ message: 'Error fetching user' });
    }
}
UsuarioController.login=async(req,res)=>{
try {
    const{email,password}=req.body
    const user =await Usuario.findByEmail(email)
    if(!user){
        return res.status(400).json({message:'Email o password invalido'})
    }
    const isMatch= await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({message:"Invalid email or password"})
    }
    const token=jwt.sign({user},process.env.PASS_TOKEN,{expiresIn:'1h'});
} catch (error) {
    
}
}
module.exports=UsuarioController