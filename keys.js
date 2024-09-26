const glass = {
	name: 'glass',
	color: 'golden',
	price: 12,
	isCleaned: true,
}

console.log(glass);

const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);

const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
console.log(values);

const entries = Object.entries(glass);

// array of array, two dimensional array
// [
// 	[ 'name', 'glass' ],
// 	[ 'color', 'golden' ],
// 	[ 'price', 12 ],
// 	[ 'isCleaned', true ]
//   ]
console.log(entries);

// delete glass.isCleaned;
// console.log(glass);

// const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

//freeze 

// Object.freeze(glass);
glass.source = 'bangladesh';
console.log(glass);
glass.price = 5000;
delete glass.name ;
console.log(glass);
