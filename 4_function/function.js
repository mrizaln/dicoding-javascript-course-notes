// function declaration

function greeting() {
    console.log("Good morning!")
}

function multiply(a, b) {
    return a * b;
}

greeting();
console.log(multiply(10, 2));


// expression function

const greet = function(name) {
    return `Hello ${name}`;
}

console.log(greet("Adassruvh"));
console.log(greet("Adassruvh", "dfadsf", "dfasdf"));        // valid, 2 other argument is dropped


// rest parameter

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

let result = sum(12, 234, 5, 231, 63, 36, 34, 243, 23, 4, 34, 32);
console.log(result);


// arrow function

const sayName = (name) => {
    console.log(`My name is ${name}`);
}

const multiplyy = (a, b) => a*b;

sayName("Theia");
console.log(multiplyy(12,1536));


// closure

function add() {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();
console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

let count = add();
console.log(count());
console.log(count());
console.log(count());