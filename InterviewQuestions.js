//JS Interview Questions 

/*var has global and function scope
function x()
{
    //var i = 6;
    for(var i=1;i<=5;i++) {
    setTimeout(function () {
        console.log(i);
    },i * 1000);

}
  console.log("hello");
}

x();

/*
Output :
hello
6           //same copy of i is used , timer is 1s,2s,3s,4s,5s  when i = 6 that mean for loop is terminated and timer has been assigned values i = 1,2,3,4,5
6
6
6
6
*/

/*

function x()
{
    //var i = 6;
    for(let i=1;i<=5;i++) {
    setTimeout(function () {
        console.log(i);
    },i * 1000);

}
  console.log("hello");
} 

x();

*/

/*

In the code , even though you used the var keyword, the behavior is not exactly related to global scope. It's more about how closures and the event loop work in JavaScript.

When the setTimeout function is called inside the loop, it schedules the execution of the callback function after a specified delay. However, the loop doesn't wait for the delay to complete before moving on to the next iteration. Instead, it continues executing immediately.

By the time the first setTimeout callback is executed, the loop has already completed and the value of i is 6. This is because var has function scope, not block scope. In code, there is only one function scope for the entire loop, so the variable i is shared among all the iterations.

The closure created by the callback function captures the reference to the variable i, not its value at the time the setTimeout function was called. As a result, when the callback function is eventually executed, it prints the current value of i, which is 6.

On the other hand, if you use the let keyword instead of var in the loop, it creates a new block scope for each iteration. This means that each callback function will have its own copy of i that retains its value when the function was scheduled. As a result, the callback functions will print the expected values from 1 to 5.

So, the key difference here is not just about block scope versus global scope, but how closures and the event loop handle the variables captured from the outer scope.

*/


function x()       //this way we can use var keyword for printing values 1 - 5
{
    for(var i=1;i<=5;i++) {
    function close(x) {
    setTimeout(function () {
        console.log(x);
    },x * 1000);
}
  close(i);
}

  console.log("hello");
} 

x();