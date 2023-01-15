// numbers

let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

let postfix = 5
console.log(postfix++, postfix)

let prefix = 5
console.log(++prefix, prefix)


// BigInt

let bigNumber = 12345675432145756324147665432354675n
let myInt = 12345675432145756324147665432354675

console.log(bigNumber)
console.log(myInt)


console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);


// string

let greet = "Hello";
console.log(typeof(greet))

let moreGreet = "Hi"
moreGreet += greet
console.log(moreGreet)

const myName = "A Efugz"
console.log(`Hello, my name is ${myName}.`);


// boolean

let x = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))


// null

let someLaterData = null;
console.log(someLaterData);


// symbol

const id = Symbol("id")
console.log(id)
