// * var declarations are put at top
var d = c+5;

let e = c+5;
var c = 11;

// * function declarations are put at top
// ! function assignments to variables however are done after function definitions
//console.log(b(2,3))

let b = (x,y)=>{
    return 2*a(x,y)
}
// ! a is not defined if accessed here
//console.log(b(11,12));

let a = (x,y)=> x+y

// ! NaN with var, use let or const
console.log(e);

console.log(b(2,3))

let fn3 = (x,y) =>{
 return 2*fn4(x,y);
}
// ! fn4 is not assigned to a function hence error that not a function
console.log(fn3(13,7))
var fn4 = (x,y) => {
    return x-y;
}


console.log(fn3(13,7))

let f = c+10;

console.log(f);

// ! Function not defined
// console.log(fn1(4,5));
let fn1 = function(x,y) {
    return x*y;
}

console.log(fn1(3,4));

// ! fn2 declared but not defined for anonymous function
console.log(fn2(9,7));
var fn2 = function(x,y) {
    return x%y;
}
console.log(fn2(5,3));



// ! Compile error
// let g = h+20;
// let h = 10;


//b(2,3)