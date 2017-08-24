/*
	Crear una función con el nombre elMasGrande que acepte un nombre como parámetro

	Si el parámetro es Roman entonces:
	    Mostrar el siguiente mensaje en mayúscula: El mejor de la historia es Román

	Sino
   	 Mostrar el siguiente mensaje en minuscula: Por favor ingrese el nombre de un gran jugador



*/

function elMasGrande ( nombre ) {
	var siEs = `El mejor de la historia es ${nombre}`;
	var noEs = 'Por favor ingrese el nombre de un gran jugador';

	if( nombre == 'Roman'){
		console.log( siEs.toUpperCase( ))
	} else {
		console.log( noEs.toLowerCase( ))
	}


}

elMasGrande('Roman');
