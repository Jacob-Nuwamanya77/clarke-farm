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

});
router.post('/login', async(req, res) => {

    const {username,password} = req.body;
    try{
        let user= await User.findOne({username});

        if(!user)
        return res.status(400).json({
            message: 'User not found'
        });
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
            return res.status(400).json({
                message: 'Incorrect Password !'
            });
        const payload = {
            user : {
                id: user.id
            }
        };
        //generate random token
    }catch (e){
        console.error(e);
        res.status(500).json({
            message: 'Server Error'
        })
    }
})
module.exports = router;
