var arr = [20,45,56,49,18,14,10,34];

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const result = arr.filter(checkage);

function checkage(age)
{
    return age >= 18;
}

console.log(result);

//push method pushes a new element at the end of the array

arr.push(40);
console.log(typeof (arr));

// A complex data type can store multiple values and/or different data types together.

// JavaScript has one complex data type:

// object
// All other complex types like arrays, functions, sets, and maps are just different types of objects.

// The typeof operator returns only two types:
// object
// function

//pop method deletes the last element

const cars = ["bmw","maruti","ford","lambo"];

cars.pop();
console.log(cars);

//fill method fills the positon specified [first,last) with a value 
//if no positon is specified it fills all the values

cars.fill('nano',1,3);
console.log(cars);