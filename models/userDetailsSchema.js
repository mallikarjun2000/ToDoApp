const mongoose = require('mongoose');

const userDetails = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 225
    },
    email: {
        type:String,
        required: true,
        unique: true,
        min: 6,
        max: 225
    },
    date:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model('userDetails',userDetails);