/*
  Filename: crsroutes.js
  Author: Kosisochukwu Abone
  Date: 16-11-2023
*/

const express = require('express');
const bookController = require("../controllers/bookControllers");
const authenticateUser = require('../middleware/authMiddleware');
const router = express.Router()

router.get('/', authenticateUser, bookController.getAllBooks); //protected route to get all books

router.get('/:id', authenticateUser, bookController.getBookById); //protected route to get a book by its ID

router.post('/create', authenticateUser, bookController.addNewBook); //protected route to add a new book

router.post('/addBooks', authenticateUser, bookController.addMultipleBooks); //protected route to add multiple books

router.put('/update/:id', authenticateUser, bookController.updateBook); //protected route to update a book by its ID

router.delete('/del/:id', authenticateUser, bookController.deleteBook); //protected route to delete a book by its ID

module.exports = router