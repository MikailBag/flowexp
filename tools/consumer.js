'use strict';
debugger;
let FE=require('./../');
let myfe=new FE('%%pat*ern%%');

let match=myfe.exec('pattern patern pattttttttttttttern paern',{multiline:true});
console.log(match);