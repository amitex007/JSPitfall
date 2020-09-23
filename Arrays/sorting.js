#!/usr/bin/env node

/*
 * @Author: amitosh.anand 
 * @Date: 2020-09-23 16:10:28 
 * @Last Modified by: amitosh.anand
 * @Last Modified time: 2020-09-23 16:28:41
 */

 // This code illustrates strange sorting order by JavaScript for non JS developers

 let a = [1,9,11,10,100000];
 a.sort();
 console.log(a);

 let b = [24, null, "wtf" ]
 b.sort();
 console.log(b);

 let c = ["natural","order",10,undefined,null,"zen"]
 c.sort();
 console.log(c)

 /*
 Array.prototype.sort converts the arrays into strings before comparing. The sorting order is determined
 by UTF-8 comparison order. This does not happen for undefined items though.
 */

 //--------------------------------------------------

 //FIX for Comparison

 //Pass a comparator function to the sort

 // Number Array: 

 function sortComparatorNumber(a,b){
     
     if(typeof a=='number' && typeof b=='number') {
        return (a>b)? 1: (a==b)?0:-1;
     } else return 0;    
 }

 let d = [1,9,11,10,100000];
 d.sort(sortComparatorNumber);
 console.log(d);