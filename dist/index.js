"use strict";
function addTowNumbers(a, b) {
    return a + b;
}
function multiplyTowNumbers(first, second) {
    return first * second;
}
function squareNumber(num) {
    return num * num;
}
function joinTowNumbers(numOne, numTwo) {
    return `${numOne}${numTwo}`;
}
let calcs = [];
calcs.push(addTowNumbers);
calcs.push(multiplyTowNumbers);
calcs.push(joinTowNumbers);
calcs.push(squareNumber);
const shapeOne = {
    name: 'square',
    calcArea(l) {
        return l * l;
    },
};
const shapeTwo = {
    name: 'circle',
    calcArea(r) {
        return (Math.PI * r) ^ 2;
    },
};
shapeOne.calcArea(5);
shapeTwo.calcArea(10);
