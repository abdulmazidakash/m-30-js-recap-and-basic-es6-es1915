//function declaration

function add(a, b){
	const result = a + b;
	return result;
}

// const sum = add(5, 6);
// console.log(sum);

function add(a, b){
	return a + b ;
}

//function expression

const add2 = function(a, b){
	return a + b ;
}

// console.log(add2(4, 5));

//arrow function 

const add3 = (a, b) => a + b ;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const multiply = (num1, num2) => num1 * num2;



// const sum = add3(5, 93);
// console.log(sum);

// const sum = add4(4, 4, 5, 6);
// console.log(sum);

const mult = multiply(3,4);
console.log(mult);