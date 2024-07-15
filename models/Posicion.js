const pool= require('../database/db');
const Posicion={};

Posicion.getPosicion=async()=>{
    const [results] =await pool.query('SELECT * FROM  posicion');
    return results
}
Posicion.setPosicion=async(data)=>{
    const {cordenadas}= data
    const sql='INSERT INTO posicion (cordenadas) VALUES (?)';
    const [results] =await pool.query(sql,[cordenadas]);
    return results
}
Posicion.findPosicionbyId=async(id)=>{
    const sql='SELECT * FROM posicion WHERE id=?';
    const [results] =await pool.query(sql,[id]);
    return results[0];
}
Posicion.updatePosicion=async(data,id)=>{
    const {cordenadas}= data
    const sql='UPDATE posicion SET cordenadas=? WHERE id=?';
    const [results] =await pool.query(sql,[cordenadas,id]);
    return results[0];
}
Posicion.deletePosicion=async(id)=>{
    const sql='DELETE FROM posicion WHERE id=?'
    const [result]= await pool.query(sql,[id])
    return result
}
module.exports=Posicion;
