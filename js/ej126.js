/*

x   Copiar y pegar el código del ejercicio 125
x	Ahora los gustos de helado se piden en otro orden del que fueron ingresados
x	El primer elemento tiene que ser el último y el último el primero
x	Para agregar los gustos utilizar una función que acepte 2 parámetros,
	la colección de gustos de helados y el nuevo gusto
-	Esta función retorna la lista modificada
	Mostrar en consola los gustos de helados

*/

var helado = [];

agregarGusto( helado , 'americana');
agregarGusto( helado , 'choclo');



function agregarGusto ( coleccionDeGustos , gusto ) {
	
	coleccionDeGustos.unshift( gusto );

}
console.log(helado);