const express = require('express');
const app = express();
const db = require('./15-db.js'); //establish the db connection before handling any http requests

app.get('/',(req,res) => {
    res.send('Welcome to the Home Page: ')
})

app.listen('3000', () => {
    console.log('server is running...')
})
