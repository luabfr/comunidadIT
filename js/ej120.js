/*

	Declarar un array vacio con el nombre alumnos
	Asignar el nombre de un alumno en los ínidices: 0, 1, 2, 3, 4 y 5
	Mostrar en consola cada uno de los elementos utilizando los índices dados
	Ejemplo de formato de salida: índice 0: Marta

*/

var miArray = [];
miArray[ 0 ] = 'pepe';
miArray[ 1 ] = 'juan ';
miArray[ 2 ] = 'pedro';
miArray[ 3 ] = 'fibo ';
miArray[ 4 ] = 'luc';
miArray[ 5 ] = 'frit';
for (var i = 0 ; i <= 5; i++ ) {
	console.log(`indice ${ i }: ${miArray[ i ]}`);

}
