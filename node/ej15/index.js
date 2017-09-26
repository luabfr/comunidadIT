const express = require('express');
const app = express();
let puerto = 3000 ;
app.listen( puerto , function() {    console.log(`Servidor corriendo en el puerto ${puerto}`);  });


var requestTime = function (req, res, next) {
    const mensaje = `Request a ${req.baseUrl} ${Date.now()}`
    console.log( mensaje )
    next();
};

app.use( requestTime );

app.get('/', function(request, response) {
    response.json(
        {
            status: 200,
            message: 'Este request/response está OK'
        }
    );
});



