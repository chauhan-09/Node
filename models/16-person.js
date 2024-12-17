const mongoose = require('mongoose');

//defining person schema

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true  //makes it a mandatory field
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum: ['chef','manager','waiter'],  //only one of these values will be stored
        required: true 
    },
    mobile:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true      //only unique values will be stored
    },
    address:{
        type:String
    },
    salary:{
        type: Number,
        required: true
    }
});

//create person model using schema
//through the help of this model we will perform CRUD operations


const Person = mongoose.model('Person',personSchema);
module.exports = Person;

