import { useEffect, useState } from 'react';
import BookTile from '../components/BookTile';
import './shop.css'
import { supabase } from './supabase';




const Shop = () => {
  // grabbing items from database
  const [shopItems, setShopItems] = useState([]);

  // I'm not 100% sure this is the correct way to do everything, but its a good starting point
  useEffect(() => {
  (async () => {
      const items = await getDataFromDatabase();
      setShopItems(items);
    })();
  }, []);

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
    <div className='tile-container'>
      {
        shopItems.map(x => <BookTile bookTileInfo={x}  />)
      }

      <button onClick={uploadBookToDatabase}></button>
    </div>);
};

export default Shop;