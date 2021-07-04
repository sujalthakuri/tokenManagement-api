const express = require('express');
const router = express.Router();
const body = require('body-parser')
const TokenInformation = require('../models/token_information_model')


router.post('/token/receive',function(req,res){

    phone_number = req.body.phone_number
    token_number = req.body.token_number
    code = req.body.code
    date = Date()

    const data = new TokenInformation({phone_number:phone_number, token_number:token_number, code: code, date : date})
    data.save()
    .then(function(response){
        console.log("Token Distributed")
        res.status(200).json({success:true,message:"Token Received"})
    })
    .catch(function(err){
        res.status(500).json({error:err})
    })

})

router.post('/token/information',function(req,res){

    const code = req.body.code
    const phone_number = req.body.phone_number
    
    TokenInformation.find({'code':code, 'phone_number':phone_number})
    .then(function(response){ 
        console.log(response)
        if(response.length!=0){
            console.log("Token Generated and Found")
            res.status(200).json({success:true,data:response})
        }
        else{
            res.status(200).json({success:false})
        }
    })
    .catch(function(err){
        res.status(500).json({error : err})
    })

})

router.post('/token/all',function(req,res){
    const code = req.body.code
    TokenInformation.find({code})
    .then(function(response){
        if(response.length!=0)
        {
            console.log(response)
            res.status(200).json({success:true,data:response})
        }
        else{
            res.status(200).json({success:false})
        }
    

    })
    .catch(function(err){
        res.status(500).json({error : err})
    })
})



module.exports = router;