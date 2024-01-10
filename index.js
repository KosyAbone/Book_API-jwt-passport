/*
  Filename: index.js
  Author: Kosisochukwu Abone
  Date: 16-11-2023
*/

require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('./src/config/passport-config');
const flash =  require('express-flash');
const bookRouter = require('./src/routes/bookRoutes')
const authRouter = require('./src/routes/authRoutes')
const InitializeDB = require('./db')
InitializeDB(); //initialize the database

const app = express()
const PORT = process.env.PORT || 4000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(flash());

// Initialize Passport
app.use(passport.initialize());

app.get('/', (req,res) => 
    res.send(`Welcome Page!! \nNode and express server is running on port ${PORT}`)
)

app.use('/auth', authRouter) //route for authentication
app.use('/book', bookRouter) //route to the book controller

try{
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    })
}catch(error) {
    console.log(error)
};
