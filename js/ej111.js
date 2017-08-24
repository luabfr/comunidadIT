/*
x	Crear una función esPar que retorna un valor boolean
x	Esta función debe validar si un número es par o no
x	Ejecutar esta función con los siguientes números: 2, 5, 3, 24, 12

	En caso de que el número sea par mostrar un mensaje que diga: ${numero} es par
	Caso contrario mostrar en consola el siguiente mensaje: ${numero} no es par
*/


function esPar( num ){
	var devolver;
	
	if ( num % 2 == 0 ) {
		devolver = true ;
	}else {
		devolver = false ;
	}

	return devolver;
}

var numero = 2 ;
if ( esPar( numero ) ){
	console.log(`${numero} es par`)
}else {
	console.log(`${numero} NO es par`)
}
