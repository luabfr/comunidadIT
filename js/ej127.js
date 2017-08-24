/*

x    Crear un documento con el nombre ej127.js
x    Copiar y pegar el código del último ejercicio 126
x    A la lista final que mostramos en consola eliminarle los 2 primeros gustos
x    Asignar los gustos eliminados en un nuevo array de gustos que no tienen stock
x    Mostrar la lista de gustos que quedó
x    Mostrar la lista de gustos sin stock


*/

var helado = [];

agregarGusto( helado , 'americana');
agregarGusto( helado , 'choclo');
agregarGusto( helado , 'fruti');
agregarGusto( helado , 'bana');


function agregarGusto ( coleccionDeGustos , gusto ) {
	
	coleccionDeGustos.unshift( gusto );

}
console.log(helado);

var sinStock = [
	helado.shift(),
	helado.shift()
];


console.log('En Stock ' + helado );
console.log('Sin Stock ' + sinStock);