/*
	Crear una función con el nombre invertir que acepta un texto como parámetro
	Mostrar en consola el texto invertido
	Casos de uso:

	    Si se ejecuta la función con el valor hola se espera que la función retorne aloh




*/

function invertir ( texto ) {

	var resultado ='' ;

	for( var i = texto.length - 1 ; i >= 0 ; i-- ){

	    resultado = resultado.concat( texto.charAt( i ) );

	} 

	console.log( resultado );

}
invertir('hola querido conejo');