const numbers = [354, 64,56 ,545];

// for(let i = 0; i < numbers.length; i++){
// 	console.log(numbers[i]);
// }

// let i = 0;
// while(i < numbers.length){
// 	console.log(numbers[i]);
// 	i++;
// }

// for(let num of numbers){
// 	console.log(num);
// }

const nobab = 'siraj ud doula';
for (let char of nobab){
	// console.log(char);
}

const glass = {
	name: 'glass',
	color: 'golden',
	price: 12,
	isCleaned: true
}

// for (const key of glass){
// 	console.log(key);
// }

// for (const key in glass){
// 	const values = glass[key];
// 	console.log(key, values);
// }


//optional 
const keys = Object.keys(glass);
console.log(keys);

for (const key of keys){
	const value = glass[key];
	console.log(key, value);
}