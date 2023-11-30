// Cart.js
import React from 'react';
import { useCart } from './CartContext';
// ...

const Cart = () => {
    const { state, dispatch } = useCart();

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    const calculateTotal = () => {
        return state.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {state.cartItems.map((item) => (
                    <li key={item.id}>
                        {item.title} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
        </div>
    );
};

export default Cart;
