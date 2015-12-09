'use strict';

let square = require('./../lib/find').square;
console.log('');

console.log(square('sample'));
console.log(square('sa]mple'));
console.log(square('sam]pl]e'));

console.log(square('sa]mp[le'));
console.log(square('samp][le'));
console.log(square('sam[p]le'));

console.log(square('sa[mpl]e'));
console.log(square('sa[m][p]le'));
console.log(square('sam[]ple'));
  /**/

