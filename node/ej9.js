/*
Crear un archivo con el nombre ej9.js
Levantar un servidor utilizando Express
El servidor tiene que responder con el siguiente texto:
    'Bienvenidos a Node.js Server Side'
Al levantar el servidor tiene que mostrar un mensaje que diga:
    `Servidor corriendo en el puerto ${puerto}`
En caso de haber un error al levantar el servidor tiene que mostrar el siguiente mensaje:
`No se pudo levantar el servidor en el puerto ${puerto}`
*/
const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('Bienvenidos a Node.js Server Side World!');
});

let puerto = 3000 ;
app.listen( puerto , function() {

    console.log(`Servidor corriendo en el puerto ${puerto}`);
});