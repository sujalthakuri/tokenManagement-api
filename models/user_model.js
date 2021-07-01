const mongoose = require('mongoose')

const User = mongoose.model('User',{


    first_name :{
        type : String
    },

    last_name : {
        type : String
    },

    phone_number : {
        type : String
    },

    password : {
        type : String

    }

}
)

module.exports = User;