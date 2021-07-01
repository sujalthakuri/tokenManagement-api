const mongoose = require('mongoose')

const Room = mongoose.model('Room',{


    room_name : {
        type : String
    },

    createdBy : {
        type : String
    },

    code : {
        type : String
    },

    verified:{
        type : String,
        enum : ['verfied','unverified'],
        default:'unverified'
    }




})

module.exports = Room;