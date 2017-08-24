/*

    Crear un array números
    Ingresar números de 0 a 10000
    Sumar los valores de todos los números del array
    Mostrar en consola los resultados parciales
    Mostrar en consola el resultado final
    Si el número es igual a 50005000 Entonces
        Mostrar en pantalla: El ejercicio es correcto
    Sino
        Verificar el ejercicio para obtener el resultado esperado!!!


*/

let num = [];


let suma = 0;
for (let j = 0 ; j <= 10000; j++) {
	num[j] = j ;
	suma += num[j];
	console.log('suma parcial: ' + suma );
}

console.log('Resultado FINAL: ' + suma );

if ( suma == 50005000 ) {
	console.log('Mostrar en pantalla: El ejercicio es correcto');
}else {
	console.log('Verificar el ejercicio para obtener el resultado esperado!!!');
}