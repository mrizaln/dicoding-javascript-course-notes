const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

console.log(numberSet);

numberSet.delete(4);
console.log(numberSet);
