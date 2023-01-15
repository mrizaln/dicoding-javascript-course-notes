let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

for (let i = 0; i <= myArray.length; ++i)
    console.log(typeof(myArray[i]), '\t', myArray[i]);

myArray.push("javascript");
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift();            // return first element and remove it
myArray.unshift("Apple");   // insert at index 0

console.log(myArray);

delete myArray[1];
console.log(myArray);

myArray.splice(2, 1);       // delete from index 2 by 1 amount
console.log(myArray)

// spread operator

console.log(...myArray)

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* can be used to object literals */

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
