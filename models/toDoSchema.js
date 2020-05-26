const mongoose = require('mongoose');

const toDos = new mongoose.Schema({
    title:{
        type: String,
        min:6,
        max:225,
        required: true
    },
    description: {
        type: String,
        min:6,
        max:300,
        required: true
    },
    date:{
        type:Date,
        required:true,
        default: Date.now()
    },
    status: {
        type:Boolean,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('toDos',toDos);