const pool= require('../database/db');
const Cuenta={};

Cuenta.getCuenta=async()=>{
    const [results] =await pool.query('SELECT * FROM  cuenta');
    return results
}
Cuenta.setCuenta=async(data)=>{
    const {descuento,saldo,total}= data
    const sql='INSERT INTO cuenta (descuento,saldo,total) VALUES (?,?,?)';
    const [results] =await pool.query(sql,[descuento,saldo,total]);
    return results
}
Cuenta.findCuentabyId=async(id)=>{
    const sql='SELECT * FROM cuenta WHERE id=?';
    const [results] =await pool.query(sql,[id]);
    return results[0];
}
Cuenta.updateCuenta=async(data,id)=>{
    const {descuento,saldo,total}= data
    const sql='UPDATE cuenta SET descuento=?,saldo=?,total=? WHERE id=?';
    const [results] =await pool.query(sql,[descuento,saldo,total,id]);
    return results[0];
}
Cuenta.deleteCuenta=async(id)=>{
    const sql='DELETE FROM cuenta WHERE id=?'
    const [result]= await pool.query(sql,[id])
    return result
}
module.exports=Cuenta;
