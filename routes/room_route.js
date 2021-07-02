const express = require('express');
const router = express.Router();
const body = require('body-parser')
const Room = require('../models/room_model');
const math = require('math')

router.post('/room/create',function(req,res){
    const room_name = req.body.room_name
    const createdBy = req.body.createdBy

    const data = new Room({room_name:room_name, createBy:createdBy, code:Math.floor(100000 + Math.random() * 900000)})
    data.save()

    .then(function(response){
        console.log(Math.floor(100000 + Math.random() * 900000))
        res.status(200).json({success:true,message:"Room Created Successfully"})
    })
    .catch(function(err){
        res.status(500).json({error : err})
    })

})

router.post('/room/show',function(req,res){
    Room.find().then(function(roomData){
        res.send(roomData)
    })
})

module.exports = router;