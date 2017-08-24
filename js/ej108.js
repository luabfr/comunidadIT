/*

x	Crear una función con el nombre ordenarNúmeros que acepte 
		tres parámetros numéricos llamados numero1, numero2 y numero3

x	Dentro de la función ordenar los números de menor a mayor

x	Ejecutar la función con los siguientes parámetros: 10, 8, 25
x	Mostrar en consola el siguiente resultado: 8, 10, 25

x	Agregar un último parámetro que acepte un tipo de dato boolean llamado descendente
x	En caso de que el parámetro descendente sea verdadero mostrar en consola el siguiente mensaje: 25, 10, 8
x	Ejecutar la función agregando true cómo último parámetro en el llamado de la función, 
	ejemplo: ordenarNúmeros(10, 8, 25, true)

*/


function ordenarNúmeros( num1 , num2 , num3 , descendente ){
 	var pos1;
 	var pos2;
 	var pos3;


 	//posicion 1º
	if( num1 <= num2 && num1 <= num3){
		pos1 = num1 ;

		if( num2 <= num3 ){
			pos2 = num2 ;
			pos3 = num3 ;
		}else {
			pos2 = num3 ;
			pos3 = num2 ;
		}

	}else if( num2 <= num1 && num2 <= num3){
		pos1 = num2; 

		if( num1 <= num3 ){
			pos2 = num1 ;
			pos3 = num3 ;
		}else {
			pos2 = num3 ;
			pos3 = num1 ;
		}

	}else {
		pos1 = num3;
		if( num1 <= num2 ){
			pos2 = num1 ;
			pos3 = num2 ;
		}else {
			pos2 = num2 ;
			pos3 = num1 ;
		}
	}


	if ( !descendente ) {
		console.log( `Descendente:\n 1º ${pos1} \n 2º ${pos2}  \n 3º ${pos3}` );
	}else {
		console.log( `Descendente:\n 1º ${pos3} \n 2º ${pos2}  \n 3º ${pos1}` );
	}

	


}


ordenarNúmeros( 10, 8, 25 , true );


