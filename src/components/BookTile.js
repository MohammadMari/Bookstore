// BookTile.js
import React, { useState } from "react";
import "./BookTile.css";
import { useCart } from "../pages/CartContext";
import books from "../pages/books";

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

  const handleAddToCart = () => {
    // console.log("Adding to cart:", bookTileInfo);
    onAddToCart(bookTileInfo);
    setInCart(true);
  };

  const button = inCart ? <div>In Cart</div> : <button onClick={handleAddToCart}>Add to Cart</button>;

  return (
    <div className="book-tile">
      <div className="book-picture"></div>
      <div className="book-info">
        <div className="title">{bookTileInfo.title}</div>
        <div className="author">{bookTileInfo.author}</div>
        <div className="price">{bookTileInfo.price}</div>{" "}
        {/* Display the price */}
        {button}
      </div>
    </div>
  );
}

export default BookTile;
