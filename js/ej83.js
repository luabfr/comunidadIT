var num1 = 1 ;
var num2 = 10 ;
var txt = '' ;
var umbral = 10 ;

do{
	

	do {
		txt = txt.concat('*');	
		num2 ++ ;	
	}while( num2 < umbral )



	console.log( txt );
	txt = '';
	umbral-- ;

	num1++ ;
	num2 = 0 ;

}while(num1 <= 10)