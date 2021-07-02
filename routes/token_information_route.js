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
        res.status(200).json({success:true,message:"Token Received"})
    })
    .catch(function(err){
        res.status(500).json({error:err})
    })

})



module.exports = router;