function fibonacci(num) {
let a=0,b=1,c=1;
	if (num==1){
		return a;
	}
	for(let i=2; i<=num;i++){
		c=a+b;
		b=c;
		a=b;
	}
			return b;
}

module.exports = fibonacci;
