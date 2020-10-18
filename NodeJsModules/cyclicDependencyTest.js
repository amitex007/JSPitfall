let a = 10;
let b = 5;

// ! Order Matters here.
// * if cycle1 is exported first it will pass unfinished copy to cycle2 which will give error on exported function


//et cycle1 = require('./cyclicDependency');
let cycle2 = require('./cyclicDependency2');
let cycle1 = require('./cyclicDependency');
// * calculates module from cycle1
//console.log(cycle1.sum(a,b));

//console.log(cycle1);

// ! Cyclic dependecy as method was not loaded
console.log(cycle2.multiply(5,2));

console.log(cycle1.expo(5,2));

//console.log(cycle1.divide(10,5))
