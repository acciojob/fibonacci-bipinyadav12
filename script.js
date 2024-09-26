function fibonacci(num) {
let a = 0, b = 1, c ,i ;
	if (num===1){
		return a;
	}
	else if (num===2){
		return b;
	}
	for( i=3+; i<=num ;i++){
		c=a+b;
		b=c;
		a=b;
	}
			return b;
}

module.exports = fibonacci;
