/*

    Crear un documento con el nombre ej128.js
    Copiar y pegar el código del último ejercicio 127
    Eliminar los 2 últimos gustos de la lista de helados
    Asignar los gustos eliminados en el array de gustos que no tienen stock
    Mostrar la lista de gustos que quedó
    Mostrar la lista de gustos sin stock

*/

var helado = [];

agregarGusto( helado , 'Americana');
agregarGusto( helado , 'Banana');
agregarGusto( helado , 'Choclo');
agregarGusto( helado , 'Durazno');


function agregarGusto ( coleccionDeGustos , gusto ) {
	
	coleccionDeGustos.unshift( gusto );

}




var sinStock = [
	helado.pop(),
	helado.pop()
];


console.log('En Stock ' + helado );
console.log('Sin Stock ' + sinStock);