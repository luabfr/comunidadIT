const express = require('express');
const app = express();
const path = require('path')

let puerto = 3000 ;
app.listen( puerto , function() {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});


app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'json.json'));
});

