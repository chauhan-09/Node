const os = require('os');


//built-in modules don't need ./ and also we don't need to install them
console.log(os.userInfo());
console.log(`The uptime is ${os.uptime()}`); //this is example of string interpolation
//String interpolation means replacing placeholders with their values in a string

//uptime is the time since machine is running 

const details = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(details);
