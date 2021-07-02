const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./database/db')
const user_route = require('./routes/user_route')
const room_route = require('./routes/room_route')
const token_information_route = require('./routes/token_information_route')
const token_route = require('./routes/token_route')


app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(user_route)
app.use(room_route)
app.use(token_information_route)
app.use(token_route)

app.use(bodyParser.json())




app.listen(90)