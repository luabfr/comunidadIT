/*
Crear la función promedio que acepta 5 notas (numbers)
Mostrar en consola el promedio de la cursada
*/


function promedio( n1 , n2 , n3 , n4 , n5 ){

	resultado = (n1 + n2 + n3 + n4 + n5) / 5 ;

	console.log('El promedio es ' + resultado);
}
promedio( 5, 5, 5, 9, 10 );