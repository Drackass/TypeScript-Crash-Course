"use strict";
// union types
let someId;
someId = 1;
someId = '2';
let email = null;
email = 'mario@drackass.dev';
email = null;
let anotherId;
anotherId = 'zgfiuhzvycuiz';
anotherId = 42;
// union type pitfall
function swapIdType(id) {
    parseInt(id);
    return id;
}
swapIdType('5');
