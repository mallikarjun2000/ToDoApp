const express = require('express')
const routes = express.Router();
const mongoose = require('mongoose');
const userDetails = require('../models/userDetailsSchema');
const toDos = require('../models/toDoSchema');

routes.get('/',async (req,res)=>{
    try{
        const todosList = await toDos.find({userId:req.headers.id});
        res.json({message:'list obtained',body:todosList});
    }catch(err){
        res.json({message: err.message});
    }
})

routes.post('/',async (req,res)=>{
    try{
        const newTodo = new toDos({
            title: req.body.title,
            description: req.body.description,
            userId: req.headers.id
        })
        newTodo.save().then(async ()=>{
            const updatedList = await toDos.find({userId: req.headers.id});
            res.json({message:'New List',body:updatedList});
        })
    }catch(err){
        
    }
})

routes.put('/:id',async (req,res)=>{
    try{
        const todoId = req.params.id;
        const status = req.body.status;
        const updatedTodd = await toDos.findByIdAndUpdate(todoId,{$set: {status: status}})
        .then((updated)=>{
            res.json({message:'Sucessfully updated',body:updated});
        })
    }catch(err){
        res.json({message: err.message});
    }
})

module.exports = routes;