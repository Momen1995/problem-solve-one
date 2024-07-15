//output:1 ---> I am var

//2
function greet(names,greeting = "Hello"){
  return `${greeting}, ${names}!`
}

console.log(greet("Alice")); 
console.log(greet("Bob", "Good morning")); 

//3
function sum(...num){
 const addNum = num.reduce((acc,value) => acc + value,0)
 return addNum;
}

console.log(sum(1, 2, 3)); 
console.log(sum(10, 20, 30, 40)); 
console.log(sum(5));

//4
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const mergedArray = [...array1,...array2,...array3]

console.log(mergedArray);

//5
const names = "John";
const age = 30;

const person = {
  names,
  age,
  greet: function(){
    return `Hi, I'm ${this.names} and I'm ${this.age} years old.`;
  }
}

console.log(person.greet());

//6
const fruits = ["apple", "banana", "cherry"];

for(const fruit of fruits){
  console.log(fruit)
}

//7
const name1 = "Alice";
const age2 = 25;
const message = `My name is ${name1} and I am ${age2} years old.`;

console.log(message);

//8
const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 },
];

for(const {name,grade} of students){
  console.log(`Student name:${name}, grade:${grade} `)
}

//9
const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (const innerArray of nestedArrays) {
  let sum = 0;
  for (const num of innerArray) {
    sum += num;
  }
  console.log(sum);
}

//10
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a+b}`;

console.log(result); 

