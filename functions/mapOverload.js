// * functions need not be called with all arguments

function argTest(a,b,c){
    console.log(a+b);
    console.log(c);
}

// * Calling with all arguments
console.log("Calling with all arguments")

argTest(1,4,6);

// * Calling with first two arguments 
console.log("Calling with first two arguments ")

argTest(1,3);

// * Calling with 1st and 3 rd argument
console.log("Calling with 1st and 3 rd argument")
argTest(5, undefined, 7);

console.log('\n \n PITFALL \n\n')
// * Since the arguments can be overloaded one has to be careful with certain overloaded functions
// ! A common example ---- parseInt

let x = ["1","2","3"].map(parseInt)
console.log(x);

// * Parseint accepts 2 parameters (value, radix)

// * Array.map calls the function with 3 params (value, index, wholeArray)

// * Now you can understand what may have happened here

console.log('Avoiding such pitfall')
// * To avoid such scenarios always be more specific on argument operation in such functions

let y = ["1","2","3"].map(val=>parseInt(val))
console.log(y);











