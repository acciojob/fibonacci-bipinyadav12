function fibonacci(num) {
let a = 0, b = 1, c ,i ;
	if (num==1){
		return a;
	}
	for( i=2; i<=num ;i++){
		c=a+b;
		b=c;
		a=b;
	}
			return b;
}

module.exports = fibonacci;
