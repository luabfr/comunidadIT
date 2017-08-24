/*

    Crear un array con el nombre de 5 alumnas del curso
    Crear un array con el nombre de 5 alumnos del curso
    Crear un array con el nombre de los alumnos y alumnas del curso
    Mostrar en consola los siguiente nombres de forma individual (uno por linea):
    x        Nombres de las alumnas (a mano utilizando índices)
    x 	    Nombres de los alumnos (utilizando while)
    x        Nombres de todos los alumnos del curso (utilizando for)


*/

let alumnos = [
	'Charles ',
	'Scott ',
	'Henry McCoy',
	'Grey',
	'Calvin'
];
let alumnas = [
	'Carla ',
	'Sandra ',
	'Ana',
	'Marta',
	'Carlita'
];
let todosLosAlumnos = alumnos.concat(alumnas);

console.log( alumnas[0] );
console.log( alumnas[1] );
console.log( alumnas[2] );
console.log( alumnas[3] );
console.log( alumnas[4] );

console.log('\nWHILE: ')
let i = 0;
while( i < 5 ){
	console.log( alumnos[i] );
	i++ ;
}
console.log('\nFOR: ')
for (var j = todosLosAlumnos.length - 1; j >= 0; j--) {
	console.log( todosLosAlumnos [j] );
}



