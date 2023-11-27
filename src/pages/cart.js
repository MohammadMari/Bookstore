import React, { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
        </div>
    );
};

export default Cart;
