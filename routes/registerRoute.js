const express = require('express');
const router = express.Router();
const userDetails = require('../models/userDetailsSchema');
const userLogin = require('../models/usersLogin');
const bcrypt = require('bcrypt');


router.get('/',(req,res)=>{
    res.send('you are at register');
})


/// For Registering the user in database
router.post('/',async (req,res)=>{
    const originalUser = req.body;
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(originalUser.password,salt);
        const existingUser = await userLogin.findOne({email:originalUser.email});
        if(existingUser)
        {
            res.json({message: 'user already exists'});
        }
        else{

            /// First create login Credentials
            const loginUser = new userLogin({
                email: originalUser.email,
                password: hashPassword
            }).save()
            .then((user)=>{

                /// Second create a space for user Details
                const newUser = new userDetails({
                    email: originalUser.email,
                    username: originalUser.username
                }).save().then((user)=>{

                    /// Third Send responce
                    res.json({message:'user registered Sucessfully',body:user._id});
                })
            })
        }
    }
    catch(err){
        res.send(err.message);
    }
})

module.exports = router;