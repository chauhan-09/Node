const express = require('express');
const router = express.Router();
const MenuItem = require('.././models/19-MenuItem.js');

router.post('/' , async (req,res) => {

    try{
        const data = req.body;
        const menuitem = new MenuItem(data);
        const response = await menuitem.save()
        console.log('Data saved');
        res.status(200).json(response);
    }
    catch(err){
        
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})

router.get('/', async (req,res) => {
    try{
        const response = await MenuItem.find();
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})

module.exports = router;
