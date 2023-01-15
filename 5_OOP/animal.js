class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
};

class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true);
    }

    eat() {
        return `${this.name} sedang makan!`;
    }
};

class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false);
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
};

let myRabbit = new Rabbit("Labi", 2);
let myEagle = new Eagle("Elo", 4);

console.log(myRabbit, myEagle);