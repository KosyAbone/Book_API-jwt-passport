/*
  Filename: controller.js
  Student's Name: Kosisochukwu Abone
  Student ID: 200569052
  Date: 12-10-2023
*/

import Book from '../models/crsModel'

/**
 * Function to Add a new book to the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - The newly added book with its details as a JSON response.
 */
export const addNewBook = async(req, res) => {
    try{
        let newBook = await Book.create(req.body);
        res.status(200).json(newBook);
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

/**
 * Function to Add multiple books to the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Array} - An array of the newly added books as a JSON response.
 */
export const addMultipleBooks = async(req, res) => {
    try{
        let newBooks = await Book.insertMany(req.body);
        res.status(200).json(newBooks);
    }catch(err){
        return res.status(500).json({message: err.message})
    }
}

/**
 * Function to Get all books from the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Array} - An array of all books as a JSON response.
 */
export const getAllBooks = async(req, res) => {
    try{
        const allBooks = await Book.find();
        res.status(200).json(allBooks);
    }
    catch (err){
        return res.status(500).json(err);
    }
}

/**
 * Function to Get a book by its ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - The details of the book with the specified ID as a JSON response.
 */
export const getBookById = async(req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        if(!book) {
           return res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json(book);
    }catch(err){
        return res.status(404).json({message: err.message})
    }
}

/**
 * Function to Update a book by its ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - A success message and the updated book details as a JSON response.
 */
export const updateBook = async(req, res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedBook) {
            return res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json({message: "Book updated successfully", updatedBook});
    }catch(err){
        return res.status(404).json({message: err.message})
    }
}

/**
 * Function to Delete a book by its ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - A success message confirming the book deletion as a JSON response.
 */
export const deleteBook = async(req, res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book) {
            return res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json({message: "Book deleted successfully"});
    }catch(err){
        return res.status(404).json({message: err.message})
    }
}


