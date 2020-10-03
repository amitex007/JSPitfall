/*
 * @Author: amitosh.anand 
 * @Date: 2020-10-04 00:37:32 
 * @Last Modified by: amitosh.anand
 * @Last Modified time: 2020-10-04 00:44:45
 */

 function test(a,b,c){
     console.log(b)
 }
 function test2(...b){
     console.log(b)
 }

 let z = [1,2,3]

 test(...z);

 x = {a:1,b:3,c:4}

 //test(...x)

 test2(6,7,8);

 console.log(global.x);
 
 console.log(global.z);