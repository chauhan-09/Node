/*

1. Difference between Synchronous and ASynchronous Programming

Synchronous means sequentially, the code will be executed line by line.
Sequential Code wait's for an operation to be completed.

Asynchronous means non-blocking.

Allows multiple operations to be performed concurrently without waiting
Doesn't block the excution flow and allows the program to continue
(I/O Operations,network requests,fecthing data)
Handled with: Callbacks, Promises, Async/Await

Not all functions that take function as arguemnts are async functions but most of them are.
e.g - SetTimeout() and SetInteval() are async functions


*/