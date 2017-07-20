"use strict";
function createSQ(config) {
    let newSq = { color: "red", area: 100 };
    if (config.color) {
        newSq.color = config.color;
    }
    if (config.width) {
        newSq.area = config.width * config.width;
    }
    return newSq;
}
let config = { color: "green", width: 100 };
console.log(createSQ(config));
let a = [1, 2, 3, 4, 5, 6];
let b = a;
a = b;
console.log(typeof a);
