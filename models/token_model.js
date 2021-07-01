const mongoose = require('mongoose')
const Token = mongoose.model('Token',{


    active_token : {
        type : String,

    },

    people : {
        type : String
    },

    average_time : {
        type : String
    },

    code : {
        type : String
    }


})

module.exports = Token;