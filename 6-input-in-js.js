const prompt = require('prompt-sync') ();
const age = prompt('enter your age : ');

if(age >= 18) console.log('you are an adult');
else console.log('you are a kid'); 