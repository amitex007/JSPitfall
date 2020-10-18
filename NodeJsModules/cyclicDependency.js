let cycle2 = require('./cyclicDependency2');
function sum2(a,b){
    return a+b;
}

function divide(x,y) {
    return cycle2.divide(x,y);
}

function expo2(a,b) {
    let ans =1;
    for(let i =0;i<b;i++) {
        ans = cycle2.multiply(ans,a);
    }
    return ans;
}
module.exports = {sum: (a,b)=>{
    return a+b;
}, expo: (a,b)=>{
    let ans =1;
    for(let i =0;i<b;i++) {
        ans = cycle2.multiply(ans,a);
    }
    return ans;
}, divide};