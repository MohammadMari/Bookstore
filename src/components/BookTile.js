// BookTile.js
import React, { useState } from "react";
import "./BookTile.css";
import { useCart } from "../pages/CartContext";

function BookTile(props) {
  const { bookTileInfo, onAddToCart } = props;
  const { state, dispatch } = useCart();
  const [inCart, setInCart] = useState(
    state.cartItems.filter((x) => x.id == bookTileInfo.id).length
  );

  const bookInCart = () => {
    var matchedBooks = state.cartItems.filter((x) => x.id == bookTileInfo.id);

    console.log(state.cartItems);
    console.log(matchedBooks);
    // should really only go up to one
    if (matchedBooks.length > 0) {
      console.log(inCart);
    }
  };

    // Ensure sanitizedTitle is not undefined
    const sanitizedTitle = bookTileInfo.title ? bookTileInfo.title.replace(/\s/g, '_').toLowerCase() : 'placeholder';
    const imageUrl = `/images/${sanitizedTitle}.jpg`;

    console.log("Generated Image URL:", imageUrl);

  const handleAddToCart = () => {
    // console.log("Adding to cart:", bookTileInfo);
    onAddToCart(bookTileInfo);
    setInCart(true);
  };

  const button = inCart ? <div>In Cart</div> : <button onClick={handleAddToCart}>Add to Cart</button>;

  return (
        <div className="book-tile">
      <div className="book-picture">
                <img
                    src={imageUrl}
                    alt={`${bookTileInfo.title}`}
                    style={{ width: "100%", height: "100%", objectFit: 'contain' }}
                    onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
                />
            </div>
          <div className="book-info">
        <div className="title">{bookTileInfo.title}</div>
        <div className="author">{bookTileInfo.author}</div>
        <div className="price">{bookTileInfo.price}</div>{" "}
       
        {button}
          </div>
        </div>
  );
}

export default BookTile;
