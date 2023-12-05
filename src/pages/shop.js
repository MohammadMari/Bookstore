import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookTile from '../components/BookTile';
import './shop.css';
import '../components/BookTile.css';
import { supabase } from './supabase';
import { useCart } from './CartContext';
import { BsDisplay } from 'react-icons/bs';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const { dispatch } = useCart();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    (async () => {
      const items = await getDataFromDatabase();
      setShopItems(items);
    })();
  }, [currentPage, itemsPerPage]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  async function getDataFromDatabase() {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .range(currentPage, currentPage + itemsPerPage - 1);

    return data;
  }

  async function uploadBookToDatabase() {
    var exampleBookItem = {
      title: 'book title',
      author: 'author',
      isbn: 'isbn',
      release_year: 2020,
      price: 60.00,
      purchased: false,
    };

    const { error } = await supabase.from('books').insert(exampleBookItem);
    if (error) {
      console.error('Error uploading book:', error.message);
    } else {
      console.log('Book uploaded successfully!');
      var newBooks = await getDataFromDatabase();
      setShopItems(newBooks);
    }
    console.log('Redirect to the Add Book page or handle form on this page.');
  }

  useEffect(() => {
    async function fetchTotalBooks() {
      const { count } = await supabase.from('books').select('count', { count: 'exact' }).single();
      const totalBooks = count || 0;
      setItemsPerPage(Math.min(totalBooks, 8));
    }

    fetchTotalBooks();
  }, []);

  return (
    <div>
      <div className='tile-container'>
        {shopItems.map((item, index) => (
          <BookTile key={index} bookTileInfo={item} onAddToCart={addToCart} />
        ))}
      </div>
      <div className='button-container'>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span> Page {currentPage} </span>
        <button onClick={handleNextPage} disabled={shopItems.length < itemsPerPage}>
          Next
        </button>
      </div>
      {/* <Link to="/AddBooks">
        <button onClick={() => console.log('Upload Book Clicked')}>Upload Book</button>
      </Link> */}
    </div>
  );
};

export default Shop;
