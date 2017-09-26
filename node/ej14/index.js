const express = require('express');
const app = express();

let puerto = 3000 ;
app.listen( puerto , function() {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});


app.get('/', function(request, response) {
    response.status(200).send('Este response esta Ok!');
});

app.get('/products', function(request, response) {
    response.status(500).send('Ha ocurrido un error!');
});
app.get('/contacto', function(request, response) {
    response.status(404).send('No encontrado!');
});
