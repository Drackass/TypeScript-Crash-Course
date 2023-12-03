"use strict";
// extending type aliases
const personOne = {
    id: 1,
    firstName: 'John'
};
const personTwo = {
    id: '2',
    firstName: 'Jane',
    email: 'contact@drackass.dev'
};
const personThree = {
    email: 'peach@gmail.com'
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
}
// printUser(personOne)
// printUser(personTwo)
printUser(personThree);
