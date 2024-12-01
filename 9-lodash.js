/*

lodash is a library used for data manipultaion (array , string , object iterating and filtering etc)
It offers many functions 
_ symbol is used as naming convention , we can also use any other name

*/

const _ = require('lodash');
const arr = ['ram','ram',1,2,3,4,5,2,2,1,3,4,'oliver','ram'];

const result = _.uniq(arr);  //uniq gives unique values removes duplicates
console.log(result);

console.log(_.isString('okay')); //checks whether the given input is a string or not

