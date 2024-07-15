const pool= require('../database/db');
const Buses={};

Buses.getBuses=async()=>{
    const [results] =await pool.query('SELECT * FROM  buses');
    return results
}
Buses.setBuses=async(data)=>{
    const {nombre,placa,marca,modelo,ruta_id,cuenta_id}= data
    const sql='INSERT INTO buses (nombre,placa,marca,modelo,ruta_id,cuenta_id) VALUES (?,?,?,?,?,?)';
    const [results] =await pool.query(sql,[nombre,placa,marca,modelo,ruta_id,cuenta_id]);
    return results
}
Buses.findBusesbyId=async(id)=>{
    const sql='SELECT * FROM buses WHERE id=?';
    const [results] =await pool.query(sql,[id]);
    return results[0];
}
Buses.updateBuses=async(data,id)=>{
    const {nombre,placa,marca,modelo,ruta_id,cuenta_id}= data
    const sql='UPDATE buses SET nombre=?,placa=?,marca=?,modelo=?,ruta_id=?,cuenta_id=? WHERE id=?';
    const [results] =await pool.query(sql,[nombre,placa,marca,modelo,ruta_id,cuenta_id,id]);
    return results[0];
}
Buses.deleteBuses=async(id)=>{
    const sql='DELETE FROM buses WHERE id=?'
    const [result]= await pool.query(sql,[id])
    return result
}
module.exports=Buses;
