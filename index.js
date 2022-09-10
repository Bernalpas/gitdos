
//Creamos constantes y requerimos las libreríasa
const express = require('express');
const path = require('path');


//Ejecutamos express y guardamos el puerto
const PORT = process.env.PORT || 8080;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


//Rutas 
app.get('/', (req, res) => {
    res.sendFile('index');
});


//Aplicación en escucha por el puerto asignado
app.listen(PORT, () => {
    //console.log(`Aplicación activa y trabajando en el Puerto ${PORT}`);
});

//En caso de error, me avisa
app.on('Error', (err) => {
    //console.log(`Tenemos un error en el Espacio`);
});