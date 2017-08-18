var num = 1;
var txt = '*' ;

do {

	if ( num % 2 ==  1 ) {
		console.log( txt );
	};
	txt = txt.concat('*');
	num++ ;
}while( num <= 10  )

