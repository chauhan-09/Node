const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./15-db.js'); //establish the db connection before handling any http requests


const bodyParser = require('body-parser');
app.use(bodyParser.json()); //parsed data will be stored in req.body and data coming is in JSON format

const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('Welcome to the Home Page: ')
})

const personRoutes = require('./routes/21-personRoutes.js');
const menuItemRoutes = require('./routes/22-menuItemRoutes.js');

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(PORT, () => {
    console.log('server is running...')
})
