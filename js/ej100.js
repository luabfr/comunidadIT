/*
	Declarar una función que muestre en consola los números pares del 0 al 100
*/


esto();

function esto(){

	var cont = 0 ;
	for( var i = 0 ; i <= 100 ; i++ ){

		if( i % 2 == 0 ){
			console.log( i );
		}
		
	}
	
}