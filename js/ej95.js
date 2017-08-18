
var n1 = 0 ;
var n2 = 1 ;
var n ;


for( n = 1 ; n <= 10 ; n = (n1 + n2) ){
	
	n1 = n2 ;
	n2 = n ;

	console.log( n );

}