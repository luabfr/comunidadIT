/*

	Declarar un array con el nombre juegos y asignar los siguientes valores:

	    Grand Theft Auto V
	    The Last of Us Remastered
	    Persona 5
	    Metal Gear Solid V
	    Uncharted 4
	    Journey
	    Bloodborne
	    The Witcher 3
	    INSIDE
	    flower
	    Diablo III

	Reemplazar Grand Theft Auto V por FIFA 18
	Reemplazar Metal Gear Solid V por FIFA 17
	Reemplazar flower por FIFA 16
	Mostrar en consola la lista de juegos modificada

*/

var miArray = [
	'Grand Theft Auto V' ,
	'The Last of Us Remastered' ,
	'Persona 5' ,
	'Metal Gear Solid V' ,
	'Uncharted 4' ,
	'Journey' ,
	'Bloodborne' ,
	'The Witcher 3' ,
	'INSIDE' ,
	'flower' ,
	'Diablo III' 

];
miArray[ 0 ] = 'Fifa 18' ;
miArray[ 3 ] = 'Fifa 17' ;
miArray[ 9 ] = 'Fifa 16' ;
for (var i =  miArray.length -1 ; i >= 0; i-- ) {
	console.log(miArray[i]);
}