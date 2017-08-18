var num1 = 1 ;
var num2 = 10 ;
var txt = '' ;
var umbral = 10 ;

while(num1 <= 10){
	while( num2 < umbral ) {
		txt = txt.concat('*');	
		num2 ++ ;	
	}
	console.log( txt );
	txt = '';
	umbral-- ;

	num1++ ;
	num2 = 0 ;

}