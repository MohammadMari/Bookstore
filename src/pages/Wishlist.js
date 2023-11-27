import React, { useState, useEffect } from "react";

const Wishlist = () => {
    // Initialize state to hold wishlist items
    const [wishlistItems, setWishlistItems] = useState([]);

    // Retrieve wishlist items from local storage on component mount
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlistItems(storedWishlist);
    }, []);

    // Save wishlist items to local storage whenever the wishlistItems state changes
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    // Function to add an item to the wishlist
    const addToWishlist = (item) => {
        setWishlistItems((prevWishlist) => [...prevWishlist, item]);
    };

    // Function to remove an item from the wishlist
    const removeFromWishlist = (itemId) => {
        const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
        setWishlistItems(updatedWishlist);
    };

    return (
        <div className="wishlist-container">
            <h2>Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is currently empty.</p>
            ) : (
                <ul>
                    {wishlistItems.map((item) => (
                        <li key={item.id}>
                            {item.name}{" "}
                            <button onClick={() => removeFromWishlist(item.id)}>
                                Remove from Wishlist
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {/* Example usage: addToWishlist({ id: 1, name: 'Book Title' }) */}
            {/* Use the addToWishlist function to add items to the wishlist */}
        </div>
    );
};

export default Wishlist;
