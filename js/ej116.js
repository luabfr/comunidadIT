/*
	Crear la función mejorJugadorArgentino que acepta como parámetro un número

	Esta función retorna el nombre de un jugador según el número de camiseta que utilizó en la selección del 86
	Utilizar la siguiente lista de jugadores: 
		18 Nery Pumpido 
		5 José Luis Brown 
		9 José Cuciuffo 
		19 Óscar Ruggeri 
		14 Ricardo Giusti 
		16 Julio Olarticoechea 
		2 Sergio Batista 
		12 Héctor Enrique 
		7 Jorge Burruchaga 
		10 Diego Armando Maradona 
		11 Jorge Valdano
	En caso de que se ingrese un número que no corresponde a un jugardor retornar el siguiente valor: Carlos Bilardo
	Mostrar en consola el número pasado como parámetro y el nombre del jugador retornado
	ejemplo: Si pasamos 10 como parámetro obtenemos Diego Armando Maradona como valor de retorno. 
	Mostrar en consola: 10, Diego Armando Maradona

*/

function mejorJugadorArgentino ( num ) {

	var name;
	num ==   18 ? name = ' Nery Pumpido': 
	num ==   5  ? name = ' José Luis Brown' : 
	num ==	9  ? name = ' José Cuciuffo ' :
	num ==	19 ? name = ' Óscar Ruggeri ' :
	num ==	14 ? name = ' Ricardo Giusti ' :
	num ==	16 ? name = ' Julio Olarticoechea ' :
	num ==	2  ? name = ' Sergio Batista ' :
	num ==	12 ? name = ' Héctor Enrique ' :
	num ==	7  ? name = ' Jorge Burruchaga ' :
	num ==	10 ? name = ' Diego Armando Maradona ' :
	num ==	11 ? name = ' Jorge Valdano' :
	name = 'Carlos Bilardo';


	console.log( num  + name );


}
mejorJugadorArgentino( 10 );
