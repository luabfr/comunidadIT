/*
	Sumar los números pares del 0 al 10000
	Cortar la ejecución al encontrar 10 números pares
	Mostrar en consola el resultado de los números hasta el momento del corte
*/

var suma = 0 ;
var cont = 0 ;

for( var i = 0 ; i <= 1000 ; i++ ){
	console.log( i );

	if( i % 2 == 0 ){
		suma += i ;
		cont++ ;	
	}
		

	if( cont >= 10 ){
		i = 1000;
	} 
	
}
console.log( suma );
