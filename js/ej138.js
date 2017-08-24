/*

	Copiar la lista de mutantes del ejercicio 130
	Crear una copia de la colección de mutantes modificando los siguientes valores:
	  Prof. Charles Francis Xavier
	  James "Logan" Howlett
	  Jean Elaine Grey
	Agregar <3 a cada mutante que nos gusta
	  Ejemeplo: <3 Jean Elaine Grey
	Mostrar en consola:
	  Lista original de mutantes
	  Lista modificada de mutantes

*/


var mutantes= [
	'Prof. Charles Francis Xavier',
	'Scott Summers',
	'Dr. Henry Philip "Hank" McCoy',
	'Jean Elaine Grey',
	'Calvin Montgomery Rankin',
	'Kevin Sydney',
	'Lorna Sally Dane',
	'Alexander Summers',
	'Suzanne Chan',
	'James "Logan" Howlett',
	'Ororo Monroe'
];




let mutantesAmados = mutantes.map( function( mutante_X ) {
	let love = '<3 ';
	if ( mutante_X == 'Prof. Charles Francis Xavier' || mutante_X == 'James "Logan" Howlett' || mutante_X == 'Jean Elaine Grey' ) {
		love = love.concat( mutante_X );
		mutante_X = love;
	}


	return mutante_X;
});

console.log('Mutantes ORIGINAL------')
console.log( mutantes );
console.log('Mutantes LOVE ------')
console.log( mutantesAmados );