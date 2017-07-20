"use strict";
interface Sa {
    color?: string;
    width?: number;
    [propName: string]: any;
}
function createSQ(config: Sa) {
    let newSq = {color: "red", area: 100};
    if (config.color) {
        newSq.color = config.color;
    }
    if (config.width) {
        newSq.area = config.width * config.width;
    }
    return newSq;
}

let config = {color: "green", width: 100};
console.log(createSQ(config));

let a: number[] = [1, 2, 3, 4, 5, 6];
let b: ReadonlyArray<number> = a;
a = b as number[];
console.log(typeof a);
