import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId, image, bookName, author, tags, category} = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
            <figure className='bg-slate-400 py-8 rounded-lg'>
                <img
                src={image}
                className='h-[166px]'
                alt={bookName} />
            </figure>
        <div className="card-body">
            <div className='flex justify-center gap-4'>
            {
               tags.map((tag, index) =><button 
               key={index}
               className="btn btn-xs bg-slate-300">{tag}</button>) 
            }
            </div>
            <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>By: {author}</p>
            <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-between">
        <div className="badge badge-outline">{category}</div>
        <div className="rating"> 5.00
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            
            </div>
        </div>
        </div>
        </div>
        </Link>
    );
};

export default Book;