const mongoose = require('mongoose')
const TokenInformation = mongoose.model('TokenInformation',{

    phonenumber : {
        type : String
    },

    token_number : {
        type : String
    },

    code : {
        type : String
    },

    date : {
        type : Date
    }

})