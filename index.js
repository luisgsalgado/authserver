const express = require('express');
const cors = require('cors');
const path = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();



//crear el servidor/aplicación de express
const app= express();

//Base de datos
dbConnection();

//Directorio público
app.use(express.static('public'));

//CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

// //Manejar demas rutas
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// })

app.listen( process.env.PORT, () => {
    console.log (`servidor corriendo en puerto ${process.env.PORT}`)
})