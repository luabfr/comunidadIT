//Sumar los números del 0 al 1000
//Cortar la ejecución si la suma es superior a 100
//Mostrar el resultado final en consola
var suma = 0 ;
for( var i = 0 ; i <= 1000 ; i++ ){
	
	suma += i ;

	if( suma >= 100 ){
		i = 1000;
	} 
	
}
console.log( suma );
