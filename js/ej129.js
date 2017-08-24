/*

    Crear un documento con el nombre ej129.js
    Copiar y pegar el código del ejercicio 125
    Recorrer la lista de gustos de helados y mostrarlos en consola uno a uno utilizando console.log()
        De inicio a fin
        De fin a inicio

*/


var helados = [];
helados.push('americana');
helados.push('banana');
helados.push('granizado');
helados.push('dulce');
helados.push('frulita' , 'nevado' , 'chocolate' , 'coco' , 'merengue' , 'sandomble');


for (var i = helados.length - 1; i >= 0; i--) {
	console.log( helados[i]);
}
for (var i =  0 ; i <= helados.length - 1 ; i++ ) {
	console.log( helados[i]);
}
