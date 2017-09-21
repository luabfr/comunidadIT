/*
    x Instalar el módulo logplease como solo dependencia de desarrollo de nuestro proyecto
    x Importar el módulo logplease
    x Importar el módulo numeros
    x Llamar a la función es par con los siguientes valores: 2, 3, 101, 201, 202, 100
    x Si el número es par mostrar en consola el siguiente mensaje utilizando los métodos indicados del módulo logplease:
    El número es par (utilizar el método info)
    Sino
    El número no es par (utilizar el método error)
*/
const Logger = require('logplease');
const logger = Logger.create('CONSOLA: ');



const numeroPar = require('./numeros');

let arreglo = [2, 3, 101, 201, 202, 100];

arreglo.forEach( function( n ){
    numeroPar( n ) ? logger.info('SI, es PAR') : logger.error('esta mal');
} );

