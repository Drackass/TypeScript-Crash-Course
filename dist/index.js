"use strict";
// tuples
let person = ['John', 25, true];
// tuples exemples
let hsla;
hsla = [120, '100%', '50%', 1];
let xy;
xy = [94.7, 20.1];
function useCoords() {
    // get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
// named tuples
let user;
user = ['peach', 25];
console.log(user[0]);
