const jsonstring = '{ "name" : "golu" , "age" : 25 , "hobbies" : ["reading","chess","cp"] }'
const jsonobject = JSON.parse(jsonstring); //converting json to object
console.log(jsonobject);


const object = {
    
    name : "abhay",
    age:22,
    working:"yes",
    department: "cleaning"
}

const ans = JSON.stringify(object); //converting object to JSON
console.log(ans);


/*

What is JSON?

JSON is JavaScript Object Notation.
It is a lightweight format used for storing and passing data.
JSON is represented as string which makes data storing more organized.
Server uses JSON for sending data to the web page.


*/