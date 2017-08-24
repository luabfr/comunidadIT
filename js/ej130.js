/*

x    Ordenar la lista
x    Revertir el orden de la lista ordenada
    Unir los nombres de todos los mutantes utilizando * para separarlos
    Mostrar en consola:
        Lista original de mutantes
        Lista ordenada de mutantes
        Lista revertida de mutantes
        Nombres de mutantes sepadaros por *


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

console.log( mutantes );
console.log( mutantes.sort() );
console.log( mutantes.reverse() );
console.log( mutantes.join(' * ') );