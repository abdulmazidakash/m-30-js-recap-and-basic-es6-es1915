const actor = {
	name: 'ananta',
	age: 32,
	phone: '01343544535',
	money: 524355345,
}

//if right side is an object left side of destructing will object as well
const {phone, age: boyos} = actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;


// console.log(phone);
console.log(actor.phone);
console.log(actor.phone);
console.log(actor.phone);
console.log(actor.phone);
console.log(actor.phone);
console.log(actor.phone);

console.log(boyos);

//array destructuring
const numbers = [45, 64];
const [first , second] = numbers;
const [x, y] = [23, 45];

//advanced 
function doubleThem(a, b){
	return [a * 2, b * 2];

}

const [prothom, ditiyo] = doubleThem(4,6);
console.log(prothom, ditiyo);