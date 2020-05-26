const mongoose = require('mongoose');

const userLogins = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 225
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 225
    },
    date:{
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('userLogin',userLogins);