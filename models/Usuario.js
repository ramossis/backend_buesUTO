const pool= require('../database/db');
const Usuario={};

Usuario.getUsuario=async()=>{
    const [results] =await pool.query('SELECT * FROM  users');
    return results
}
Usuario.setUsuario=async(data)=>{
    const {nombre,apellido,ci,correo,password,celular,rol,buses_id,cuenta_id}= data
    const sql='INSERT INTO users (nombre,apellido,ci,correo,password,celular,rol,buses_id,cuenta_id) VALUES (?,?,?,?,?,?,?,?,?)';
    const [results] =await pool.query(sql,[nombre,apellido,ci,correo,password,celular,rol,buses_id,cuenta_id]);
    return results
}
Usuario.findUsuariobyId=async(id)=>{
    const sql='SELECT * FROM users WHERE id=?';
    const [results] =await pool.query(sql,[id]);
    return results[0];
}
Usuario.updateUsuario=async(data,id)=>{
    const {nombre,apellido,ci,correo,password,celular,rol,buses_id,cuenta_id}= data
    const sql='UPDATE users SET nombre=?,apellido=?,ci=?,correo=?,password=?,celular=?,rol=?,buses_id=?,cuenta_id=? WHERE id=?';
    const [results] =await pool.query(sql,[nombre,apellido,ci,correo,password,celular,rol,buses_id,cuenta_id,id]);
    return results[0];
}
Usuario.deleteUsuario=async(id)=>{
    const sql='DELETE FROM users WHERE id=?'
    const [result]= await pool.query(sql,[id])
    return result
}
module.exports=Usuario;
