//an object or an array of const type can be update or changes can be made
const person = {
    name:"narender",
    age:25,
    address:"a-37 vasant marg vasant vihar new delhi - 57",
    hobbies: ['CP','stock market','chess','reading','running'],
    rating:7,
}

person.name = "golu";
console.log(person);

const arr = ["bmw","tesla","maruti","ferrari"];
arr[1] = 'wagon-r';
console.log(arr);

//not with a variable though
const a = 90;
a = 100;
console.log(a); //this will give an error (run time error)



