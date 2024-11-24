import React from 'react';
import {useLoaderData, useParams} from 'react-router-dom';
const BookDetail = () => {

    const {bookId} = useParams();
    
    const data = useLoaderData();

    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id)
    const {bookId: currentBookId, image} = book;

    const handleMarkAsRead = () => {

    }
    

    return (
        <div className='py-4'>
            <h2>Book details: {bookId}</h2>
            <img className='w-44' src={image} alt="" />
            <br />
            <button onClick={handleMarkAsRead} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
            <button className="btn btn-accent">Add to Wishlist</button>
        </div>
    );
};

export default BookDetail;