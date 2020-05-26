const express = require('express');
const router = express.Router();
const userLogin = require('../models/usersLogin');
const jwt = require('jsonwebtoken');
const dorenv = require('dotenv');
const userDetails = require('../models/userDetailsSchema');

dorenv.config();

router.get('/',async (req,res)=>{
    console.log('Token secret is ',process.env.TOKEN_SECRET);
})

router.post('/',async (req,res)=>{
    const user = await userLogin.findOne({email:req.body.email});
    if(!user) res.json({message:"user doesn't exist"});
    const userDetail = await userDetails.findOne({email: req.body.email});
    const token = jwt.sign({_id: userLogin._id},process.env.TOKEN_SECRET);
    res.header('auth-token',token).json({message:'logined Succesfully',body:userDetail._id});
})

module.exports = router;