// classes
type Base = 'classic' | 'thin' | 'thick' | 'garlic'

class Pizza {
    constructor(private title: string, private price: number) {}

    private base: Base = 'classic'
    private toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }

    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter(t => t !== topping)
    }

    selectBase(b: Base): void {
        this.base = b
    }
}

const pizzaOne = new Pizza('mario special', 15)
const pizzaTwo = new Pizza('luigi special', 10)

function addMushroomToPizzas(pizzas: Pizza[]): void {
    for (const p of pizzas) {
        p.addTopping('mushroom')
    }
}

addMushroomToPizzas([pizzaOne, pizzaTwo])

console.log(pizzaOne, pizzaTwo)