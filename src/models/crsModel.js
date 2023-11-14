/*
  Filename: crsModel.js
  Student's Name: Ilham Sheikh
  Student ID: 200557496
  Date: 12-10-2023
*/

import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({ //create a schema for the book model
    BookName: {
        type: String,
        required: 'Enter the title of the book'
    },
    ISBN: {
        type: String,
        required: 'Book must have ISBN'
    },
    Rating: {
        type: Number
    },
    Author: {
        type: String,
        required: 'Enter the author of the book'
    },
    Genre: {
        type: String,
        required: 'Fill in the genre'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

const Book = mongoose.model('Book', BookSchema) //create a model for the book schema
export default Book