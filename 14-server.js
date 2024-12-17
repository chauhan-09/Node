const express = require('express');
const app = express();
const db = require('./15-db.js'); //establish the db connection before handling any http requests
const Person = require('./models/16-person.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //parsed data will be stored in req.body and data coming is in JSON format

app.get('/',(req,res) => {
    res.send('Welcome to the Home Page: ')
})

app.listen('3000', () => {
    console.log('server is running...')
})
