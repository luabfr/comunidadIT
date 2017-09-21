/*
    x Declarar una función con el nombre esPar
    x Esta función acepta un número como parámetro
    x Retorna un valor boolean true en caso de que el valor sea par y false en caso de que no lo sea
    Exportar la función
*/

function esPar ( numero ){
    let si;
    numero % 2 == 0 ? si = true : si = false;
    return si;

}

module.exports = esPar;
