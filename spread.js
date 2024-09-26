const max = Math.max(4,75,56, 45, 4,5);
const numbers = [3,54, 64,6, 45, 645];
const arrayMax = Math.max(...numbers);

console.log(max);
console.log(arrayMax);
console.log(...numbers);

//use spread operator to copy

const friends = [3, 4, 5,3];
const bondu = friends;

// bondu.push(345);
// console.log(bondu);
// console.log(friends);

const dosto = [...friends]; //copy
console.log(dosto);
friends.push(24);
console.log(dosto);
console.log(friends);

//advanced

const sonka = [...friends, 999] //add extra elements while copy

console.log(sonka);