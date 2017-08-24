/*

   Crear una array de gastos para un viaje, por ejemplo 100 pesos de hotel, 1000 de viaje y 200 de comida
   Sumar todos los valores de los gastos utilizando map(?)
   Mostrar en consola cuanto vamos a gastar en el viaje

*/

let viaje = [ 100 , 2200 , 231 ];
let gastos = viaje.reduce(function( total , plata ){

	return total + plata ;	// esto va haciendo un 'total' += 'plata'
});

console.log( gastos )