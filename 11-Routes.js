const express = require('express');
const app = express(); 

/*

const app = express(); ---> creates an instance of express
express() returns an object this object contains method for handling requests , defining routes etc.
now we can access this using the app variable

*/

app.get('/', (req,res) => {
    res.send('Welcome to the Home Page!');
})

app.get('/user', (req,res) => {
    const obj = {
        name : 'golu',
        age:25,
        hobbies: ["chess","cp","reading"], 
    }
    res.send(obj);
})

app.post('/details', (req,res) => {
    const d1 = {
        name : 'narender',
        age:'25',
        salary:'25k',
        phone:9384858493
    }

    res.send(d1);
})
/*

express automatically converts json object to json string
msg will display as json object on the web page

*/

app.listen(3000, ()=>
{
    console.log('Server is runnning:')
})

