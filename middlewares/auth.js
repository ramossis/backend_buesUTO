require('dotenv').config
const jwt = require('jsonwebtoken')

const auth=(req,res,next)=>{
    const token= req.header('Authorization')?.split(' ')[1];
    if(!token){
        return res.status(401).json({
            message:'Acceso denegado, Tpken no suministrado'
        })
    }
    try {
        const decoded = jwt.verify(token,process.env.PASS_TOKEN)
        req.user=decoded;
        next()
    } catch (error) {
        res.status(400).json({message:'Token Invalido'})
    }
}
module.exports=auth