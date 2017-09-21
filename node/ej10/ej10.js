/*
x Ruta: Raiz del sitio ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
x Ruta: Productos, Metodo: get, Acción: Mostrar un mensaje que diga: listado de productos
x Ruta: Productos, Metodo: post, Acción: Mostrar un mensaje que diga: crear un producto
x Ruta: Productos, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un producto
x Ruta: Productos, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un producto

Ruta: Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
Ruta: Usuarios, Metodo: post, Acción: Mostrar un mensaje que diga: crear un usuario
Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un usuario

*/
const express = require('express');
const app = express();

/*---------------------------------------*/
app.get('/', function(request, response) {
  response.send('Bienvenidos a Node.js Server Side World!');
});
app.get('/productos', function(req, res) {
    res.send('listado de productos');
});
app.post('/productos', function(req, res) {
    res.send('crear productos');
});
app.put('/productos', function(req, res) {
    res.send('actualizar productos');
});
app.delete('/productos', function(req, res) {
    res.send('borrar productos');
});

/*---------------------------------------*/
app.get('/usuarios', function(req, res) {
    res.send('listado de usuarios');
});
app.post('/usuarios', function(req, res) {
    res.send('crear usuarios');
});
app.put('/usuarios', function(req, res) {
    res.send('actualizar usuarios');
});
app.delete('/usuarios', function(req, res) {
    res.send('borrar usuarios');
});

/*------------ALL---------------------------*/
app.all('/' , function(req, res) {
    res.send('Este es el Metodo ALL');
});



let puerto = 3000 ;
app.listen( puerto , function() {

    console.log(`Servidor corriendo en el puerto ${puerto}`);
});