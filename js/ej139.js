/*

   Crear un array números con valores entre 1 y 1000
   Crear un nuevo array con números pares
   Crear un nuevo array con números impares
   Mostrar en consola sólo los últimos 10 números pares e impares


*/

let num = [];
for( let i = 1 ; i <= 1000; i++ ){

	num[ i ] = i ; 

}

let pares = num.map( function( numero ){
	if (numero % 2 == 0) {
		return numero;
	}
});
let impares = num.map( function( numero ){
	if (numero % 2 == 1) {
		return numero;
	}
});

for(var i = num.length -1 ; i >= num.length - 10 ; i-- ){

	if( !isNaN( pares[ i ] )){
		console.log('pares:   ' + pares[i] );
	}
	if( !isNaN( impares[ i ] )){
		console.log('impares: ' + impares[i] );
	}
	

}