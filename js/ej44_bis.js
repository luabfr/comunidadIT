var texto = 'animal' ;
var resultado ='' ;
var palindromo = 'Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla';
var resultado2 ='' ;

for( var i = texto.length - 1 ; i >= 0 ; i-- ){

    resultado = resultado.concat( texto.charAt( i ) );

} 
console.log( resultado );

for( var i = palindromo.length - 1 ; i >= 0 ; i-- ){

    resultado2 = resultado2.concat( palindromo.charAt( i ) );

} 

console.log( resultado2 );