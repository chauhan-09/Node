const mongoose = require('mongoose');

//Define the mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL, {});

//mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

//event listners
db.on('connected', () => {
    console.log('connected to mongodb server');
})

db.on('disconnected', () => {
    console.log('disconnected from monogdb')
})

db.on('error', (err) => {
    console.log(err);
})

module.exports = db;

