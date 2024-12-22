const express = require('express');
const app = express();
const db = require('./15-db.js'); //establish the db connection before handling any http requests
const Person = require('./models/16-person.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //parsed data will be stored in req.body and data coming is in JSON format

app.get('/',(req,res) => {
    res.send('Welcome to the Home Page: ')
})

app.post('/person', async (req,res) => {
     
    try{
        const data = req.body;  //req.body contains the person data

        //create a new person document using mongoose model
        const newPerson = new Person(data);

        //saves the newPerson data in the database
        const response = await newPerson.save(); //if response gives an error the flow will move to the catch block
        console.log('Data saved');
        res.status(200).json(response);       
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

app.listen('3000', () => {
    console.log('server is running...')
})
