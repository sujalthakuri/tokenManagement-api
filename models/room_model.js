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
    },
    
    active_token : {
        type : String,

    },

    people : {
        type : String
    },

    average_time : {
        type : String
    },




})

module.exports = Room;