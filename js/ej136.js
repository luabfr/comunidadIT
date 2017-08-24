/*

	Copiar la lista de mutantes del ejercicio 130
	Recorrer la lista de mutantes uno a uno (forEach)
	Crear a mano un string y concatenar los nombres de Jean Elaine Grey y James "Logan" Howlett ' / ' (no usar join)
	Mostrar en consola el string creado

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
let txt = '';

mutantes.forEach( function( mutante_X ) {

	if( mutante_X == 'Jean Elaine Grey' || mutante_X == 'James "Logan" Howlett' ){
		txt = txt.concat( mutante_X );
	}
//	console.log('txt = ' + txt );
	

});
console.log( txt );

