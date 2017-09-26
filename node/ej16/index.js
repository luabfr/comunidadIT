const express = require('express');
const app = express();
let puerto = 3000 ;
app.listen( puerto , function() {    console.log(`Servidor corriendo en el puerto ${puerto}`);  });

const path = require('path')

app.get('/', function(req, res){

    res.sendFile(path.join(__dirname, 'index.html'));

});

//Esta linea lo que hace es setear como de acceso publico a la carpeta llamada 'public'
//sin esto, todos los links relacionadoes del index.HTML (css/js/img) se caen
app.use(express.static('public'));
