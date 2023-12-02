// union types
let someId: number | string

someId = 1
someId = '2'

let email: string | null = null

email = 'mario@drackass.dev'
email = null

type Id = number | string
let anotherId: Id

anotherId = 'zgfiuhzvycuiz'
anotherId = 42

// union type pitfall
function swapIdType(id:Id): Id {
    parseInt(id)
    return id
}

swapIdType('5')