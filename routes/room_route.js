const express = require('express');
const router = express.Router();
const body = require('body-parser')
const Room = require('../models/room_model');
const math = require('math')

router.post('/room/create',function(req,res){
    const room_name = req.body.room_name
    const createdBy = req.body.createdBy
    const people = req.body.people

    const data = new Room({room_name:room_name, createBy:createdBy, people: people, code:Math.floor(100000 + Math.random() * 900000)})
    data.save()

    .then(function(response){
        console.log(Math.floor(100000 + Math.random() * 900000))
        res.status(200).json({success:true,message:"Room Created Successfully"})
    })
    .catch(function(err){
        res.status(500).json({error : err})
    })

})

router.get('/room/show',function(req,res){
    Room.find().then(function(data){
        res.status(200).json({success:true,data:data})
    })
    .catch(function(err){
        res.status(500).json({error : err})
    })
})

router.put('/room/update',function(req,res){

    const active_token = req.body.active_token
    const people = req.body.people
    const average_time = req.body.average_time
    const code = req.body.code
    
    Room.updateOne({code : code},{active_token:active_token,people:people,average_time:average_time})
    .then(function(response){
        res.status(200).json({success:true})
    })
    .catch(function(err){
        res.status(500).json({error:err})
    })

})

module.exports = router;