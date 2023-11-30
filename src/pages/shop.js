
// Shop.js
import React, { useState } from 'react';
import BookTile from '../components/BookTile';
import './shop.css';  // Import the main shop styles
import '../components/BookTile.css';  // Import the BookTile styles
import { supabase } from './supabase';
import Cart from './cart';
import { useCart } from './CartContext';




const Shop = () => {
  const { dispatch } = useCart();
  const { data, error } = supabase.from('books').select('*');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Example shop item data
  const exampleShopItem = {
    id: 1,
    title: 'Book Title',
    author: 'Author',
    isbn: 'ISBN',
    release_year: 2020,
    price: 60.00,
    purchased: false,
  };

  const shopItems = Array.from({ length: 12 }, () => exampleShopItem);

  return (
    <div>
      <div className='tile-container'>
        {shopItems.map((item, index) => (
          <BookTile key={index} bookTileInfo={item} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Shop;
