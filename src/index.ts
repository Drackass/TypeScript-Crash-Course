// functions
function addTowNumers(a: number, b: number): number {
    return a + b
}

const subtractTowNumbers = (a: number, b: number): number => {
    return a - b
}

addTowNumers(1, 2)
subtractTowNumbers(1, 2)

function addAllNumbers(items: number[]): void {
    const total = items.reduce((a, b) => a + b, 0)
    console.log(total)
}

addAllNumbers([1, 2, 3, 4, 5])

// return type inference
function formatGreeting(name: string, greeting: string): string {
    return `${greeting}, ${name}`
}

const result = formatGreeting('mario', 'hello')