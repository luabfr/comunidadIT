/*

	Definir y declarar un objeto persona con tus datos y valores
	Este objeto tiene que tener al menos 10 propiedades y al menos un tipo de dato de: string, number, boolean, array y object (si un objeto puede tener otros objetos como propiedades)
	Algunas propiedades definirlas utilizando el objeto literal al asignarlo:


*/

let persona = {
	nombre: 'luc',
	ape: 'frit',
	edad: 29 ,
	universidad: 'una',
	recibido: false ,
	promedio: 7.29 ,
	materiasAprobadas: ['visual', 'sonido' , 'informatica'],
	objeto: {
		futuro: 'incierto',
		pasado: 'real',
		presente: 'frenetico'
	},
	canoas: 'estepas' ,
	nawal: 'midi'
	
};
persona.ki = ' over 9999!!!';

console.log(persona);
console.log('\n Persona.OBJETO: ');
console.log( persona.objeto );
console.log('\n Persona.OBJETO.PASADO: ');
console.log( persona.objeto.pasado );