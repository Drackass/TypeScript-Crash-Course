// arrays
let names: string[] = ['Mario', 'Luigi', 'Yoshi']
let ages: number[] = [25, 28, 24]

names.push('Toad')
ages.push(35)

// type inference with arrays
let fruits = ['apple', 'banana', 'orange']
fruits.push('pear')

const f = fruits[2]

let things = [1, true, 'hello']

const t = things[1]

// object literals
let user: {firstName: string, age: number, id: number} = {
    firstName: 'mario',
    age: 30,
    id: 1,
}

user.firstName = 'peach'
user.id = 2

// type inference with object literals
let person = {
    name: 'luigi',
    score: 35
}

person.name = 'bowser'
person.score = 100

const score = person.score