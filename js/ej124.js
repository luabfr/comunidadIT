/*

Crear una array con el nombre peliculas
Asignar los nombres de películas que te gusten (al menos 10)
Mostrar en consola el nombre de la primer y última película de la lista
Para el último elemento no se puede usar un índice a mano 
sino que hay que hacerlo de forma dinámica como si no sabemos la cantidad exacta de elementos

*/

var peliculas = [
	'alan ' ,
	'pepe' ,
	'maria' ,
	'migue' ,
	'martia' ,
	'miguelo' ,
	'maria 2' ,
	'migue 2' ,
	'martia 2' ,
	'miguelo 10' ,

];

console.log( peliculas[0] +'\n' + peliculas[ peliculas.length -1 ] );