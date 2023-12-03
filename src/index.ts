// Reusable Interfaces
type Calculator = (numOne: number, numTwo: number) => number

function addTowNumbers(a: number, b: number) {
    return a + b
}

function multiplyTowNumbers(first: number, second: number) {
    return first * second
}

function squareNumber(num: number) {
    return num * num
}

function joinTowNumbers(numOne: number, numTwo: number) {
    return `${numOne}${numTwo}`
}

let calcs: Calculator[] = []

calcs.push(addTowNumbers)
calcs.push(multiplyTowNumbers)
calcs.push(joinTowNumbers)
calcs.push(squareNumber)

//  function signitures on interfaces
interface HasArea {
	name: string
	// calcArea: (a: number) => number
	calcArea(a: number): number
}

const shapeOne: HasArea = {
	name: 'square',
	calcArea(l: number) {
		return l * l
	},
}

const shapeTwo: HasArea = {
	name: 'circle',
	calcArea(r: number) {
		return (Math.PI * r) ^ 2
	},
}

shapeOne.calcArea(5)
shapeTwo.calcArea(10)