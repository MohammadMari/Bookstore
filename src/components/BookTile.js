import './BookTile.css'

function BookTile(props) {
    var bookInfo = props.bookTileInfo;
    return (
    <div className="book-tile">
        <div className='book-picture'>
        </div>
        <div className='book-info'>
           <div className='title'>
                {bookInfo.title}
            </div>     
            <div className='author'>
                {bookInfo.author}
            </div>
            <div>
                {bookInfo.price}
            </div>
        </div>
    </div>
    );
}

export default BookTile;