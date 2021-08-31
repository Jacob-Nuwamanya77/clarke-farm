const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require('../Models/userModel');

router.post('/', async(req, res) => {
    try{
        const user= await User(req.body);
        //generate salt to hash password. The number in brackets stands for the salt rounds
        const salt = await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(user.password, salt);
        user.save().then((value)=>{
            res.send(value);
        })
    }catch(error){
        console.log(error);
    }

})
module.exports = router;
