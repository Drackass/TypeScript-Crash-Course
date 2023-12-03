// extending type aliases

type Person = {
    id: string | number
    firstName: string
}

type User = Person & {
    email: string
}

const personOne: Person = {
    id: 1,
    firstName: 'John'
}

const personTwo = {
    id: '2',
    firstName: 'Jane',
    email: 'contact@drackass.dev'
}

const personThree = {
    email: 'peach@gmail.com'
}

function printUser(user: User) {
    console.log(user.id, user.email, user.firstName)
}

// printUser(personOne)
// printUser(personTwo)
printUser(personThree)