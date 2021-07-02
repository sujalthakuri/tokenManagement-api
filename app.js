const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./database/db')
const user_route = require('./routes/user_route')


app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(user_route)
app.use(bodyParser.json())




app.listen(90)