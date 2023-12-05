// Cart.js
import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom"
import { useAuth } from './auth'

// ...

const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate()
  const user = useAuth().user;

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const calculateTotal = () => {
    return state.cartItems
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  };

  const handlePayment = () => {
    if (user) {
      navigate("/payment");
    }
    else {
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="cart-item-container">
        {state.cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="title-picture-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/300px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"
                width="150"
                height="150"
              />
              <div>
                <div className="book-title">{item.title}</div>
                <div className="book-description">{item.description}</div>
              </div>
            </div>
            <div>
              <div className="book-price">${item.price.toFixed(2)}</div>
              <button
                className="remove-item"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-container">
        <p>Total: ${calculateTotal()}</p>
        <button className="checkoutButton" onClick={handlePayment}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
