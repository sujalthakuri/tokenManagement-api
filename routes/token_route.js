const express = require('express')
const router = express.Router()
const body = require('body-parser')
const Token = require('../models/token_model')
const { errorMonitor } = require('events')

router.post('/room/token/create',function(req,res){
    active_token = req.body.active_token
    people = req.body.people
    average_time = req.body.average_time
    code = req.body.code

    const data = new Token({active_token:active_token, people:people, average_time:average_time, code:code})
    data.save()
    .then(function(response){
        res.status(200).json({success:true,message:"Room Information Updated"})
    })

})

router.put('/room/token/update',function(req,res){
    active_token = req.body.active_token
    people = req.body.people
    average_time = req.body.average_time
    code = req.body.code
    
    Token.updateOne({code : code},{active_token:active_token,people:people,average_time:average_time})
    .then(function(response){
        res.status(200).json({success:true})
    })
    .catch(function(err){
        res.status(500).json({error:err})
    })

})

router.delete('/room/token/delete',function(req,res){
    const code = req.body.code

    Token.deleteOne({code})
    .then(function(response){
        res.status(200).json({success:true})
    })
    .catch(function(err){
        res.status(500).json({error : errorMonitor})
    })
})

router.post('/room/status',function(req,res){
    const code = req.body.code
    console.log("Working")

    Token.find({code})
    .then(function(roomData){
        res.send(roomData)
    })
    .catch(function(err){
        res.status(500).json({error:err})
    })
})

module.exports = router;