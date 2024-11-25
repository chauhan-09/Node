const path = require('path');

//separator is a property
console.log(path.sep); 

//join method combines the path string/segements to give us the file path
const filepath = path.join('content','subfoler','test.txt');
console.log(filepath);

//basename extracts the file name from given path
const data = path.basename(filepath);
console.log(data);

//absolute path is the complete path
//resolve gives the absolute path takes path string/segments as inputs and combines them
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);