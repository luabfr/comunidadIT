/*

	Crear un array con números de 0 a 1000
	Crear un nuevo array incrementando cada valor del array en 10
	Mostrar en consola el ínidice, valor original y valor incrementado de cada uno de los primeros 10 valores

*/

let num = [];

for( let i = 0 ; i <= 1000 ; i++ ){
	num[ i ] = i ;
}

let numEnDiez = num.map(function( numero ) {
  return numero += 10 ;
});

for( let i = 0 ; i <= 1000 ; i++ ){
	
	console.log('indice:   ' + i )
	console.log('original: ' + num[ i ] );
	console.log('mas diez: ' + numEnDiez[ i ] + '\n');
}
