// * Even when there are no parameters specified in function declaration, there is a hidden variable arguments
// * It is scoped inside the function and can be used to access the arguments passed to the function as an array
const fn1 = function(){
    console.log(arguments[0]);
    console.log(arguments.length);
}

fn1(11);

fn1(12,13)