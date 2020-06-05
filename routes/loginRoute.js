const express = require('express');
const router = express.Router();
const userLogin = require('../models/usersLogin');
const jwt = require('jsonwebtoken');
const dorenv = require('dotenv');
const userDetails = require('../models/userDetailsSchema');
const bcrypt = require('bcrypt');

dorenv.config();

router.get('/',async (req,res)=>{
    console.log('Token secret is ',process.env.TOKEN_SECRET);
})

router.post('/',async (req,res)=>{
    const user = await userLogin.findOne({email:req.body.email});
    const salt = await bcrypt.genSalt(10);
    if(!user) 
    res.json({message:"user doesn't exist"});
    else
    {
        try
        {
            const hashPassword = await bcrypt.compare(req.body.password, user.password);
            if(!hashPassword){
            res.send({message:"Email or Password Doesn't match"})
            }
            else{
            const userDetail = await userDetails.findOne({email: req.body.email});
            const token = jwt.sign({_id: userLogin._id},process.env.TOKEN_SECRET);
            res.header('auth_token',token).json({message:'logined Succesfully',body:userDetail._id});
            }
        }
        catch(err){
            res.json({message: err.message});
        }
    }
})

module.exports = router;