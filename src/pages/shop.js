import BookTile from '../components/BookTile';
import './shop.css'
import { supabase } from './supabase';

const Shop = () => {
  const {data, error} = supabase.from('books').select('*');

  var exampleShopItem = {
    title: 'book title',
    author: 'author',
    isbn: "isbn",
    release_year: 2020,
    price: 60.00,
    purchased: false,
  }

  var shopItems = [exampleShopItem, exampleShopItem, exampleShopItem];
  return (  
    <div className='tile-container'>
      {
        shopItems.map(x => <BookTile bookTileInfo={x}  />)
      }
    </div>);
};

export default Shop;