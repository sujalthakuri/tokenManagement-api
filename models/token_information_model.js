const mongoose = require('mongoose')
const TokenInformation = mongoose.model('TokenInformation',{

    phone_number : {
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

module.exports = TokenInformation;