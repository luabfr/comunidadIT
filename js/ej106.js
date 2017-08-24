/*

	Declarar la función obtenerIDUsuario que retorna un valor number con el número 50

	Declarar la función usuarioValido que retorna un valor boolean
    En esta función obtener el ID del usuario con la función obtenerIDUsuario
    Si el ID del usuario es mayor que 30 retornar falso sino verdadero

SI el usuarioValido Entonces
    Mostrar el mensaje: EL usuario es válido

SINO
    Mostrar el mensaje: EL usuario no es válido


*/
function obtenerIDUsuario(){
	
	return 50 ;
}
function usuarioValido(){

	if ( obtenerIDUsuario() > 30 ) {
		return false;
	}else {
		return true;
	}

}
if( usuarioValido() ){
	console.log( 'El user es valido' );
}else{
	console.log( 'El uiser es invalido' );
}



