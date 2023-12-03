"use strict";
const something = { quantity: 50 };
function printQuantity(item) {
    console.log(`the quantity of the item is ${item.quantity}`);
}
const fruit = {
    name: 'mango',
    quantity: 50
};
const vehicle = {
    type: 'car',
    quantity: 3
};
const person = {
    name: 'mario',
    age: 30,
};
printQuantity(fruit);
printQuantity(vehicle);
printQuantity({ quantity: 50, title: 'hello' });
