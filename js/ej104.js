/*

	Declarar la variable fibonacci y asignar una función como valor
La función fibonacci tiene que mostrar los primeros 10 números de la secuencia en consola
Ejecutar esta función 3 veces

*/
var fibonacci = function(){
	var num1 = 0 ;
	var num2 = 1 ;
	var x;
	for (var i = 0; i < 10; i++ ) {
		
		x = num1 + num2;
		console.log( x );

		num1 = num2;
		num2 = x ;

	}
}
fibonacci();
fibonacci();
fibonacci();