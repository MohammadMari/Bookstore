// BookTile.js
import React from 'react';
import './BookTile.css';

function BookTile(props) {
    const { bookTileInfo, onAddToCart } = props;

    // Ensure sanitizedTitle is not undefined
    const sanitizedTitle = bookTileInfo.title ? bookTileInfo.title.replace(/\s/g, '_').toLowerCase() : 'placeholder';
    const imageUrl = `/images/${sanitizedTitle}.jpg`;

    console.log("Generated Image URL:", imageUrl);

    const handleAddToCart = () => {
        console.log("Adding to cart:", bookTileInfo);
        onAddToCart(bookTileInfo);
    };

    return (
        <div className="book-tile">
            <div className='book-picture'>
                <img
                    src={imageUrl}
                    alt={`${bookTileInfo.title}`}
                    style={{ width: "100%", height: "100%", objectFit: 'contain' }}
                    onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
                />
            </div>
            <div className='book-info'>
                <div className='title'>{bookTileInfo.title}</div>
                <div className='author'>{bookTileInfo.author}</div>
                <div className='price'>{bookTileInfo.price}</div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default BookTile;
