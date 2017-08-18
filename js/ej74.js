var num = 1;
var txt = '*' ;
while( num <= 10  ) {

	if ( num % 2 ==  1 ) {
		console.log( txt );
	};
	txt = txt.concat('*');
	num++ ;

}

