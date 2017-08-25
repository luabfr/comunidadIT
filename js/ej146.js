/*

	Vamos a refactorizar el código
	Crear una función que se llame autenticarUsuario
	Esta función acepta 2 parámetros nombreDeUsuario y clave
	Retorna un valor true si el nombreDeUsuario es batman y clave es Alfred1960KPO!
	Retorna false si el nombreDeUsuario o clave son incorrectos
	Si el usuario es válido usando la función autenticarUsuario entonces
	Mostrar los datos del usuario
	Sino
	Mostrar en consola el siguiente error: Usuario no autenticado

*/

let usuario = {
	username: 'batman',
	password: 'Alfred1960KPO!'
};



auteticarUsuario( usuario ) ? console.log( usuario ) : console.log('Usuario no autenticado');


function auteticarUsuario( nombreDeUsuario ,  clave ){
	let devolver;

	(usuario.username === 'batman') && (usuario.password === 'Alfred1960KPO!') ? devolver = true : devolver = false ;

	return devolver;

}