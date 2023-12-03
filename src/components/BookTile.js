// BookTile.js
import React from 'react';
import './BookTile.css';

function BookTile(props) {
    const { bookTileInfo, onAddToCart } = props;

    const handleAddToCart = () => {
        console.log("Adding to cart:", bookTileInfo);
        onAddToCart(bookTileInfo);
    };

    return (
    <div className="book-tile">
            <div className='book-picture'></div>
        <div className='book-info'>
                <div className='title'>{bookTileInfo.title}</div>
                <div className='author'>{bookTileInfo.author}</div>
                <div className='price'>{bookTileInfo.price}</div> {/* Display the price */}
                <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    </div>
    );
}

export default BookTile;