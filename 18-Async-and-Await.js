/*

We don't use callback functions anymore we use Async and Await for better code readability and to make our code look less complex

Async and Await are features in JavaScript that make it easier to work with asynchronous code such as network requests,file system operations or database queries.

We use try and catch block

the try block contains the code for creating a new Person document and saving it to the database using await newPerson.save()

if an error occurs during any step it is caught in the catch block and error response is sent with a 500 Interval Server Error status


Async Function(async)

An async fucntion is a function that is designed to work with asynchronous operations. You declare a function as async by placing the async keyword before the function declaration.
The primary purpose of async function is to allow you to use the await keyword inside it, which simplifies working with promises and asynchronous code.
Inside an async function you can use await to pause the execution of the function until a promise is resolved. This makes the code appear more synchronous and easier to read.

Await Funcion(await)

The await keyword is used inside an async function to wait for the resolution of a promise. It can only be used within an async function.
When await is used, the function pauses at that line until the promise is resolved or rejected. This allows you to write code that appears sequential,even though it's performing asynchronous taks.
If the promise is resolved the result of the promise is returned. If the promise is rejected , it throws an error that can be caught using try and catch block

*/
