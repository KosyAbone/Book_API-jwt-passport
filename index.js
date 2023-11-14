/*
  Filename: index.js
  Student's Name: Abhijit Singh
  Student ID: 200533462
  Date: 12-10-2023
*/

require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import passport from './src/config/passport-config';
import flash from 'express-flash';
import bookRouter from './src/routes/bookRoutes'
import authRouter from './src/routes/authRoutes'
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
