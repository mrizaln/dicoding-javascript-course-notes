const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

let isCoffeeMachineReady = true;

// module.exports = {              // CommonJS
//     coffeeStock,
//     isCoffeeMachineReady,
// };

// export default coffeeStock;  // ES6 single value export

export {                    // ES6
    coffeeStock,
    isCoffeeMachineReady
};