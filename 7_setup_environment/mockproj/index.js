// const {coffeeStock, isCoffeeMachineReady} = require("./state")      // CommonJS

import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";                                  // ES6

const makeCoffee = (type, miligrams) => {
    if (stock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}
 
makeCoffee("robusta", 80);
console.log(stock);
console.log(isCoffeeMachineReady);