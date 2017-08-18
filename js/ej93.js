var txt = '' ;
var umbral = 10 ;



for(var num1 = 1 ; num1 <= 10 ; num1++ ){
	
	for( var num2 = 0 ; num2 < umbral ; num2 ++ ){
		txt = txt.concat( '*' );	
	}

	console.log( txt );
	txt = '';
	umbral-- ;

}