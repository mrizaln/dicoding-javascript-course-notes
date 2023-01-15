// object

const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

/* initialization */
let {firstName, lastName, age} = profile;
console.log(firstName, lastName, age);

/* assignment */
({firstName, age} = profile);     // butuh tanda kurung
console.log(firstName, age)

let {a, b=true} = profile;      // b has default value (if profile does not contain a key named 'b')
console.log(a, b);

/* assigning to different local var names*/
const profilee = {
    firstNamee: "John",
    lastNamee: "Doe",
    agee: 18
}

const {firstNamee: localFirstName, lastNamee: localLastName, agee: localAge} = profilee;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);


// array

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/* select certain indexes */

let [, , tFood ] = favorites;
console.log(tFood);

let d, e, f;
[d, e, , f] = favorites;
console.log(d, e, f);
