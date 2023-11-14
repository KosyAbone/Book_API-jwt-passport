/*
  Filename: crsroutes.js
  Student's Name: Abhijit Singh
  Student ID: 200533462
  Date: 12-10-2023
*/

import express from "express";
import { addNewBook, getAllBooks, getBookById, updateBook, deleteBook, addMultipleBooks } from "../controllers/controllers";
import { authenticateUser } from '../middleware/authMiddleware';
const router = express.Router()

router.get('/', authenticateUser, getAllBooks); //protected route to get all books

router.get('/:id', authenticateUser, getBookById); //protected route to get a book by its ID

router.post('/', authenticateUser, addNewBook); //protected route to add a new book

router.post('/addBooks', authenticateUser, addMultipleBooks); //protected route to add multiple books

router.put('/:id', authenticateUser, updateBook); //protected route to update a book by its ID

router.delete('/:id', authenticateUser, deleteBook); //protected route to delete a book by its ID

export default router