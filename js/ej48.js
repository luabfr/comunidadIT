mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';

pi = parseFloat( mensaje );
console.log( pi );  


var aux = mensaje.slice( 38 , 40 );
significadoDeLaVida = parseInt( aux );


console.log( significadoDeLaVida ); 



resultado = pi + significadoDeLaVida;
console.log( resultado ); 
console.log(resultado  + " es el resultado de sumar las variables "  + pi.toString() + ' y '+ significadoDeLaVida.toString() );
