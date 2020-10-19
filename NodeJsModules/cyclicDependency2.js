let cycle1 = require('./cyclicDependency');

function divide(x,y) {
    return x/y;
}

function multiply3(x,y) {
    let cycle1 = require('./cyclicDependency');

    //console.log(cycle1);
    let ans = 0;
    for(let i=0;i<y;i++){
        ans = cycle1.sum(ans,x);
    }
    return ans;
}

module.exports = {multiply : (x,y)=>{
    let ans = 0;
    for(let i=0;i<y;i++){
        ans = cycle1.sum(ans,x);
    }
    return ans;

}, divide, multiply3}