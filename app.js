const express = require('express')
require('dotenv').config()
const app= express()

app.use(express.urlencoded({extended: true})); app.use(express.json());

app.get('/',()=>{
    'Server on Ready'
})

app.listen(process.env.PORT,()=>{
    console.log('SERVER ON READY PORT',process.env.PORT)
})


app.use('/usuarios',require('./routes/Usuario'))
app.use('/posicion',require('./routes/Posicion'))
app.use('/buses',require('./routes/Buses'))
app.use('/ruta',require('./routes/Ruta'))
app.use('/cuenta',require('./routes/Cuenta'))

