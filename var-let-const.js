//var: no reason to use var
//let: allow it to reassign
//const: do not allow it to reassign 

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [23, 33,345, 45, 654];
// numbers = [35, 564, 645, 543,5];
console.table(numbers);

numbers[1] = 44;
numbers.push(34, 645, 46);
console.log(numbers);

//object 

const student = {
	name: 'moyna pakhi',
	class: 12,
}

// student = {name: 'kokil konthi'};
console.table(student);

student.name = 'moyur konthi';
console.table(student);

//loop

let sum = 0;
for (let i = 0; i < 10; i++){
	const num = i;
	sum = sum + num;
}

console.table(sum);