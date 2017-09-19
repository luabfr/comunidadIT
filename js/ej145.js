/*

	Copiar y pegar el código del ejercicio 144
	Modificar el código del ejercicio anterior de la siguiente manera:
	
	Si el username del usuario es batman y el password es Alfred1960KPO! entonces
	Mostrar los datos del usuario
	Sino
	Mostrar en consola el siguiente error: Usuario no autenticado

*/

let usuario = {
	username: 'batman',
	password: 'Alfred1960KPO!'
};

if( usuario.username === 'batman' && usuario.password === 'Alfred1960KPO!'){
	console.log( usuario );

}else{

	console.log( 'usuario no autenticado');

}
