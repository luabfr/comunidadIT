/*
x Crear una arrow function con el nombre saludar
x Esta función acepta 3 parámetros
x El primer parámetro es el nombre de la persona que queremos saludar
x El segundo parámetro es el apellido de la persona que queremos saludar
x Esta función muestra en pantalla el siguiente mensaje:
`Hola ${nombre}` ${apellido}`
x El tercer parámetro es un callback que se va a ejecutar luego de saludar al usuario
x Esta función tiene que mostrar en pantalla el siguiente texto: 'Luego de saludar se ejecuta el callback'
x Al correr el script deberíamos ver en pantalla el saludo
*/

let listo = function (){
    console.log('Luego de saludar se ejecuta el callback');
}
let saludar = ( nombre , apellido , listo )=>{

    console.log(`Hola ${nombre} ${apellido}`);

}
saludar('ariel', 'ramirez' );
