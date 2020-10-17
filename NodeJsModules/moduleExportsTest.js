let moduleExp = require('./moduleExports')

// * Access function as mapped Property
console.log(moduleExp.test1());

// * Access function directly on module.export
console.log(moduleExp.test2());

console.log(moduleExp.test3());

console.log(moduleExp.test4());

console.log(moduleExp.test6());