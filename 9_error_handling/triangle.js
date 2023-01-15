class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
};

function validateNumberInput(f, s, t) {
    if      (typeof(f) != 'number') throw new ValidationError("Argumen pertama harus number");
    else if (typeof(s) != 'number') throw new ValidationError("Argumen kedua harus number");
    else if (typeof(t) != 'number') throw new ValidationError("Argumen ketiga harus number");
}