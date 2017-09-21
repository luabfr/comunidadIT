
let listo = function (){
    console.log('Luego de saludar se ejecuta el callback');
}
let saludar = ( nombre , apellido , listo )=>{

    console.log(`Hola ${nombre} ${apellido}`);

}

module.exports = saludar;
