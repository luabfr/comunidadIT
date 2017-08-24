/*
x	Crear una función que se llame mostrarNumeros que acepte 2 parámetros numéricos inicio y fin
x	Mostrar en consola los números que van desde el inicio hasta el fin

	Si el primer parámetro es más grande que el segundo la secuencia tiene que ser ascendente
	En caso que el primer número sea más chico que el primero la secuencia tiene que ser descendente
	Ejecutar la función utilizando los siguientes números:

	    inicio = 0, fin = 1000
	    inicio = 1000, fin = 0
	    inicio = 100, fin = 100
	    inicio = "100", fin = 300

	Resolver de alguna forma los siguientes inconvenientes

	    Los números sean iguales
	    Algunos de los parámetros no son números


*/


function mostrarNumeros( inicio , fin  ){
	if ( typeof inicio != 'number' || typeof fin != 'number') {
		console.log(' los valores ingresados NO son numericos');
	}else if ( inicio === fin ) {
		console.log(' los numeros ingresados son de igual valor');
	}else	if ( inicio < fin ) {
		for( var i = inicio ; i <= fin ; i++ ){
			console.log( i );
		}
	}else {
		for( var i = inicio ; i >= fin ; i-- ){
			console.log( i );
		}
	}

	

}

mostrarNumeros( 'ca' , 5);