"use strict";
// functions
function addTowNumers(a, b) {
    return a + b;
}
const subtractTowNumbers = (a, b) => {
    return a - b;
};
addTowNumers(1, 2);
subtractTowNumbers(1, 2);
function addAllNumbers(items) {
    const total = items.reduce((a, b) => a + b, 0);
    console.log(total);
}
addAllNumbers([1, 2, 3, 4, 5]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('mario', 'hello');
