const express = require('express');
const router = express.Router();
const Person = require('.././models/16-Person.js');

router.post('/', async (req,res) => {
     
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

/*

two endpoints can have the same name if they differ in HTTP methods. By Default the Browser prefers Get Method

*/

router.get('/', async (req,res) => {

    try{
        const response = await Person.find() //gets all the records
        //const response = await Person.findOne({name:'alice'}); --> gets records that have name as alice
        res.status(200).json(response);
    }catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})


/* Parameterised API Calls */
//API parameters are options that can be passed to an endpoint to influence the response from an API.

router.get('/:workType' , async (req,res) => {
    try{
        const workType = req.params.workType; //extract workType from URL
        if(workType == 'chef' || workType == 'waiter' || workType == 'manager')
        {
            const response = await Person.find({work : workType});
            console.log('Data Fetched')
            res.status(200).json(response);
        }
        else 
        {
            res.status(404).json({error:'Invalid Work Type'});
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(200).json({error:'Internal Server Error'});
    }
})

module.exports = router;