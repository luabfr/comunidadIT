/*

	Crear un string con los nombres de todos los mutantes utilizando map
	Mostrar en consola el nuevo string creado

*/

let mutantes= [
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

let todosLosMutantes = mutantes.reduce(function( grupoDeMutantes , mutante_X ){
	return grupoDeMutantes + mutante_X ;
});
console.log( todosLosMutantes );