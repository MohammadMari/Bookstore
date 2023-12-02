
// Shop.js
import React, { useEffect, useState } from 'react';
import BookTile from '../components/BookTile';
import './shop.css';  // Import the main shop styles
import '../components/BookTile.css';  // Import the BookTile styles
import { supabase } from './supabase';
import Cart from './cart';
import { useCart } from './CartContext';




const Shop = () => {
  // grabbing items from database
  const [shopItems, setShopItems] = useState([]);
  const { dispatch } = useCart();
  const [cartItems, setCartItems] = useState([]);

  // I'm not 100% sure this is the correct way to do everything, but its a good starting point
  useEffect(() => {
  (async () => {
      const items = await getDataFromDatabase();
      setShopItems(items);
    })();
  }, []);
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  if (!shopItems) {
    return (<div>
      Loading...
    </div>)
  }

  async function getDataFromDatabase() {
    const {data, error} = await supabase.from('books').select('*');
    // add error handling
    return data;
  }

  async function uploadBookToDatabase() {
    var exampleBookItem = {
        title: 'book title',
        author: 'author',
        isbn: "isbn",
        release_year: 2020,
        price: 60.00,
        purchased: false,
      }

      const { error} = await supabase.from('books').insert(exampleBookItem).then(console.log('done'));
      // add error checking
      // errors typically consist of incorrect format (missing info), permission issues (RLS), or anything else done incorrectly. 
      
      var newBooks = await getDataFromDatabase();
      setShopItems(newBooks);
  }

  return (  
    <div>
    <div className='tile-container'>
        {shopItems.map((item, index) => (
          <BookTile key={index} bookTileInfo={item} onAddToCart={addToCart} />
        ))}
      </div>
          <Cart cartItems={cartItems} />
          <button onClick={uploadBookToDatabase}></button>
    </div>
  );
};

export default Shop;