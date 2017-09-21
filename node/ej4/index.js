var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();

let chiste = getRandomJoke.body;
let categorias = getRandomJoke.tags;

console.log( 'CHISTE: ' + chiste ); 
console.log( 'TAGS: ' + categorias ); 