const cube = x => x**3;
const cubeMap = num => num.map( x => cube(x));

let array = [1,2,3,4,5,6,7];
console.log(`Cube value of list ${array} are ${cubeMap(array)}`);