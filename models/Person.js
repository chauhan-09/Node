const mongoose = require('mongoose');

//defining person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  //makes it a mandatory field
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef', 'manager', 'waiter'],  /* only one of these values will be stored. This is case sensitive too */
        required: true
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true      //only unique values will be stored
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
});

//create person model using schema
//through the help of this model we will perform CRUD operations
//If you're using an ORM like Mongoose, it automatically pluralizes collection names by default. 
//For instance, if you define a schema with the name Person, the corresponding collection will be named people.


const Person = mongoose.model('Person', personSchema);
module.exports = Person;

