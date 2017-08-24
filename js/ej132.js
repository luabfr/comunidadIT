/*

    Si James "Logan" Howlett Y Prof. Charles Francis Xavier están en la lista de mutantes entonces:
        Mostrar: Amamos a los X-men
    Sino
        Mostrar: Los X-men apestan



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

let contador = 0 ;

if( mutantes.indexOf('James "Logan" Howlett') > -1){
	contador++;
}
if( mutantes.indexOf('Prof. Charles Francis Xavier') > -1){
	contador++;
}


if ( contador == 2 ) {
	console.log('Amamos a los mutantes');
}else {
	console.log('Los X-Men apestan');
}