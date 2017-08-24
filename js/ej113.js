/*
x	Crear la función obtenerPerimetroRectangulo que acepta 2 parámetros base y altura
x	Si la base y altura son iguales calcular el perímetro de un cuadrado
	Si la base y altura son distintas calcular el perímetro de un rectángulo
	La función retorna el perímetro
x	Mostrar en consola un mensaje del tipo: El perímetro es ${perimetro}

	Si el perímetro es mayor a 100 entonces:

	    Mostrar el siguiente mensaje en consola: El perímetro es muy grande

	Sino

	    Mostrar el siguiente mensaje en consola: Este perímetro no es muy grande

	Ejecutar y validar esta función con distintos valores numéricos


*/

function obtenerPerimetroRectangulo ( b, a ) {
	var perimetro;
	if( b == a){
		perimetro = b*4;
		//calcular perimetro de CUADRADO
	}else {
		perimetro = b*2 + a*2;
		//calcular perimetro de RECTANGULO
	}
	console.log(`El perímetro es ${perimetro}`);

	if ( perimetro > 100) {
		console.log(`El perímetro es muy GRANDE`);
	}else {
		console.log(`El perímetro NO es muy GRANDE`);
	}


}		
obtenerPerimetroRectangulo( 25 , 25 );