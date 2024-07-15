const pool= require('../database/db');
const Ruta={};

Ruta.getRuta=async()=>{
    const [results] =await pool.query('SELECT * FROM  ruta');
    return results
}
Ruta.setRuta=async(data)=>{
    const {name,hora,inicio,fin,posicion_id}= data
    const sql='INSERT INTO ruta (name,hora,inicio,fin,posicion_id) VALUES (?,?,?,?,?)';
    const [results] =await pool.query(sql,[name,hora,inicio,fin,posicion_id]);
    return results
}
Ruta.findRutabyId=async(id)=>{
    const sql='SELECT * FROM ruta WHERE id=?';
    const [results] =await pool.query(sql,[id]);
    return results[0];
}
Ruta.updateRuta=async(data,id)=>{
    const {name,hora,inicio,fin,posicion_id}= data
    const sql='UPDATE ruta SET name=?,hora=?,inicio=?,fin=?,posicion_id=? WHERE id=?';
    const [results] =await pool.query(sql,[name,hora,inicio,fin,posicion_id,id]);
    return results[0];
}
Ruta.deleteRuta=async(id)=>{
    const sql='DELETE FROM ruta WHERE id=?'
    const [result]= await pool.query(sql,[id])
    return result
}
module.exports=Ruta;
