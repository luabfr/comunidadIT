/*

    Si Lorna Sally Dane está en los mutantes entonces
        Cortar la ejecución
    Sino
        Mostrar el nombre del mutante
    Transformar la colección de mutantes en un string sin usar join
    Mostrar en consola la representación de los mutantes en formato string

*/

let mutantes = [
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


for (var i = 0 ; i <= mutantes.length - 1 ; i++ ) {
	if( mutantes.indexOf('Lorna Sally Dane') == i ){
		i = mutantes.length - 1 ;
		console.log('Lorna Sally Dane ENCONTRADA---')
	}else {
		console.log('A : ' + mutantes[ i ] );	
	}
}

console.log( mutantes.toString() );