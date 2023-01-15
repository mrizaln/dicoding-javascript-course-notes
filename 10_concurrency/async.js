// setTimeout
{
    console.log("Selamat datang!");
    setTimeout(() =>{
        console.log("Terima kasih sudah mampir, datang kembali ya!")
        }, 3000);
    console.log("Ada yang bisa dibantu?");
}


// callback function
{
    const orderCoffee = callback => {
        let coffee = null;
        console.log("Sedang membuat kopi, silakan tunggu...");
        setTimeout(() => {
            coffee = "Kopi sudah jadi!";
            callback(coffee);
        }, 3000);
    }


    orderCoffee(coffee => {
        console.log(coffee);
    });
}


// promise
/**
 * pending, fulfilled, rejected
 */
{
    // this function will be called when Promise constructor called
    const executorFunction = (resolve, reject) => {
        const isCoffeeMakerReady = true;
        if (isCoffeeMakerReady) {
            resolve("Kopi berhasil dibuat");
        } else {
            reject("Mesin kopi tidak bisa digunakan");
        }
    }

    const makeCoffee = () => {
        return new Promise(executorFunction);
    }

    const coffeePromise = makeCoffee();
    console.log(coffeePromise);

    // consuming promise
    const stock = {
        coffeeBeans: 250,
        water: 1000,
    }

    const checkStock= () => {
        return new Promise((resolve, reject) => {
            if (stock.coffeeBeans >= 16 && stock.water >= 250) {
                resolve("Stock cukup. Bisa membuat kopi");
            } else {
                reject("Stock tidak cukup");
            }
        });
    }

    const handleSuccess = resolvedValue => {
        console.log(resolvedValue);
    }

    const handleFailure = rejectionReason => {
        console.log(rejectionReason);
    }

    checkStock().then(handleSuccess, handleFailure);

    // onRejected with catch method
    checkStock()
        .then(handleSuccess)
        .catch(handleFailure)
}


// chaining Promise
{
    const state = {
        stock: {
            coffeeBeans: 250,
            water: 1000,
        },
        isCoffeeMachineBusy: false,
    }

    const checkAvailability = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!state.isCoffeeMachineBusy) {
                    resolve("Mesin kopi siap digunakan.");
                } else {
                    reject("Maaf, mesin sedang sibuk.");
                }
            }, 1000);
        });
    }

    const checkStock = () => {
        return new Promise((resolve, reject) => {
            state.isCoffeeMachineBusy = true;
            setTimeout(() => {
                if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                    resolve("Stock cukup. Bisa membuat kopi.");
                } else {
                    reject("Stock tidak cukup!");
                }
            }, 1500);
        });
    }

    const brewCoffee = () => {
        console.log("Membuatkan kopi Anda...");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Kopi sudah siap!")
            }, 2000);
        });
    }

    // promise all
    //-------------
        const boilWater = () => {
            return new Promise((resolve, reject) => {
                console.log("Memanaskan air...");
                setTimeout(() => {
                    resolve("Air panas sudah siap!");
                }, 2000);
            });
        }

        const grindCoffeeBeans = () => {
            return new Promise((resolve, reject) => {
                console.log("Menggiling biji kopi...");
                setTimeout(() => {
                    resolve("Bubuk kopi sudah siap!");
                }, 1000);
            });
        }
    //-------------

    function makeEspresso() {
        checkAvailability()
            .then((value) => {
                console.log(value);
                return checkStock();
            })
                .then((value) => {              // promise all
                    console.log(value);
                    const promises = [boilWater(), grindCoffeeBeans()];
                    return Promise.all(promises);
                })
            .then((value) => {
                console.log(value);
                return brewCoffee();
            })
            .then((value) => {
                console.log(value);
            })
            .catch((reason) => {
                console.log(`Rejected. Reason: ${reason}`);
            });
    }

    makeEspresso();
    console.log("Hey");


    // chaining Promise using async-await
    // (read this after reading on async-await on next section)
    async function makeEspresso_async_await() {
        try {
            await checkAvailability();
            await checkStock();
            await Promise.all([boilWater(), grindCoffeeBeans()]);   // Promise all
            const coffee = await brewCoffee();
            console.log(coffee);
        } catch (rejectedReason) {
            console.log(`On async-await: ${rejectedReason}`);
        }
    }

    makeEspresso_async_await()
}


// async-await
{
    // is a syntactic sugar, it uses Promise and generator in the background
    // since ES8

    const getCoffee = () => {
        return new Promise((resolve, reject) => {
            const seeds = 9;
            setTimeout(() => {
                if (seeds >= 10) {
                    resolve("Kopi didapatkan (async-await)!");
                } else {
                    reject("Biji kopi habis (async-await)!");
                }
            }, 1000);
        });
    }

    async function makeCoffee() {
        try {
            coffee = await getCoffee();
            console.log(coffee);
        } catch (rejectedReason) {          // handle rejection
            console.log(rejectedReason);
        }
    }

    makeCoffee();
}