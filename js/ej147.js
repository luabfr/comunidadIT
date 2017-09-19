/*

	Modificar la función autenticarUsuario:
	Sólo acepta un parámetro que se llama usuario
	En lugar de utilizar los parámetros anteriores, ahora vamos a usar
	 	las propiedades username y password del objeto usuario.
	El resto del código debería funcionar igual que en el ejercicio anterior

*/

let usuario = {
	username: 'batman',
	password: 'Alfred1960KPO!'
};



auteticarUsuario( usuario ) ? console.log( usuario ) : console.log('Usuario no autenticado');


function auteticarUsuario( usuario ){
	let devolver;

	(usuario.username === 'batman') && (usuario.password === 'Alfred1960KPO!') ? devolver = true : devolver = false ;

	return devolver;

}