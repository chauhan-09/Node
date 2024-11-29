// function add(a,b) 
// {
//     return a+b;
// }

// var a = function (a,b) //the name of the function is a now
// {
//     return a+b;
// }

// var a = function add(a,b) //name of the function is still a
// {
//     return a+b;
// }

// var a = (a,b) =>  //arrow function
// {
//     return a+b;
// }

// var a = (a,b) => a+b;
// console.log(a(5,10));

/*

callback function - 

A function that is passed as an arguement to anther function.
A function that gets called after the main function is executed.

*/

// function hello(name,callback)
// {
//     console.log(name);
//     callback();
// }

function greet(name)
{
    console.log('Hello....' + name);
}

//hello("bando",greet);

setInterval(() => greet("golu"),2000) //greet("golu") is wrong