const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs');
const { response } = require('express');

router.post('/user/register',

    function(req,res){
        const first_name = req.body.first_name
        const last_name = req.body.last_name
        const phone_number = req.body.phone_number
        const password = req.body.password


        bcryptjs.hash(password,10,function(err,hash){
            console.log(hash)
            const data = new User({first_name : first_name, last_name : last_name, phone_number : phone_number, password : hash})
            data.save()
            .then(function(result){
                console.log("Succesfully Registered!")
                res.status(200).json({success:true})
            })
            .catch(function(err){
                res.status(500).json({error : err})
            })

        })
    }

)

router.post('/user/login', function(req,res){
    const phone_number = req.body.phone_number
    const password = req.body.password
    
    console.log(phone_number,password)
    User.findOne({phone_number:phone_number})
    .then(function(userData){
        if(userData == null){
            return res.status(401).json({message : "Invalid Credentials!"})
        }
        else{
            const token = jwt.sign({userId : userData._id},'sercretkey')
            return res.status(200).json({
                phone_number : userData.phone_number,
                success : true,
                message : "Authentication Success",
                token : token
            })
        }
    })

    .catch(function(e){
        console.log(e)
        res.status(500).json({message:e})
    })
})

router.post('/userProfile',function(req,res){
    const phone_number = req.body.phone_number

    User.find({phone_number:phone_number})
    .then(function(response){
        console.log(response)
        res.status(200).json({success:true, data : response})
    })
    .catch(function(err){
        res.status(500).json({error:err})
    })

})

module.exports = router;