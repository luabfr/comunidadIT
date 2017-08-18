/*
    Escribir un programa que muestre en consola la secuencia de Fibonacci 
    para los primeros 10 números utilizando la estructura while
    Podes leer más sobre esta secuencia en Wikipedia
    Acá podes encontrar una pequeña ayuda
*/
var n1 = 0 ;
var n2 = 1 ;
var n = 0 ;

do{
	n = n1 + n2 ;
	n1 = n2 ;
	n2 = n ;

	console.log( n );

}while( n <= 10 )