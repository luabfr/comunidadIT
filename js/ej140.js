/*

   Filtrar la lista de mutantes removiendo a Scott Summers sin alterar la lista original
   Mostrar en consola el nombre del mutante en el índice 1


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


let nadieQuiereAScott = mutantes.filter(function( mutante_X ){
	if ( mutante_X == 'Scott Summers') {
		mutante_X = '';
	}
	return mutante_X;
});

console.log( nadieQuiereAScott );
console.log( nadieQuiereAScott[ 1 ]);