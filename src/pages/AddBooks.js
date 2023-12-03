import React, { useState } from 'react';
import { supabase } from './supabase';
import "./AddBooks.css";

const AddBook = () => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        price: 0,
        isbn: '',
        release_year: 0, // Add release_year to the state
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!bookData.title || !bookData.author || bookData.price <= 0 || !bookData.isbn || bookData.release_year <= 0) {
            alert('Please fill in all fields and provide valid values for price, ISBN, and release year.');
            return;
        }

        const { error } = await supabase.from('books').insert(bookData);

        if (error) {
            console.error('Error adding book:', error.message);
        } else {
            console.log('Book added successfully!');
            // Optionally, you can redirect to another page or go back to the previous page.
            console.log('Redirect to another page or go back to the previous page.');
        }
    };

    return (
        <div className="add-book-container">
            <div className="add-book-form-container">
                <h2>Add Book</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Book Name:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={bookData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author Name:</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={bookData.author}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={bookData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="isbn">ISBN:</label>
                        <input
                            type="text"
                            id="isbn"
                            name="isbn"
                            value={bookData.isbn}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="release_year">Release Year:</label>
                        <input
                            type="number"
                            id="release_year"
                            name="release_year"
                            value={bookData.release_year}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Add Book</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddBook;
