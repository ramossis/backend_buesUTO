require("dotenv").config();
const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: process.env.DB_LOCALHOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  connectionLimit:10
});
pool.getConnection((err,connection)=>{
  if(err){
      if(err.code === 'PROTOCOLL_CONNECTION_LOST'){
          console.error("La conexion se a perdido");
      }
      if(err.code === 'ER_CON_COUNT_ERROR'){
          console.error("hay demasiadas conexiones");
      }
      if(err.code === 'ENCONNREFUSED'){
          console.error("Conexion rechazada");
      }
  }
  if(connection){
      connection.release();
  }
  console.log('Conectado a la base de datos');
});

module.exports=pool;