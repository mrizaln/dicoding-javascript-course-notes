// class definition/declaration

/* function syntax */
function Mail_func() {
    this.from = "marisane@mars.planet";
};

Mail_func.prototype.sendMessage = function(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

const mail1 = new Mail_func();
mail1.sendMessage('hello', "reimune@terra.planet");

/* class syntax */
class Mail_cls {
    constructor() {
        this.from = 'kdaienc@plauent.plne';
    }

    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};

const mail2 = new Mail_cls();
mail2.sendMessage("hi", "theia@thiel.ado");


// static method

class Mail_oth {
    static isValidPhone(phone) {                // a static method
        return typeof(phone) === 'number';
    }
};

console.log(Mail_oth.isValidPhone(2342443));


// inheritance

class Mail {                    // base class
    constructor(author) {
        this._from = author;
    }
};

class MailMail extends Mail {   // derived class
    constructor(author){
        super(author);
        this._idk = author + 10;
    }
};


// object composition

// [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
});

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
    // [3] attributes
    const self = {
        from,
        message,
        store
    };
    // [4] method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created: ', self.store)
    });
    
    // [5] create object composition
    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih