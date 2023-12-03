// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// ... (previous code)

// Create the context
const CartContext = createContext();

// Define the initial state and reducer function
const initialState = { cartItems: [] };

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

// Create a provider component to wrap your app
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Create a custom hook to use the cart context
export const useCart = () => {
    return useContext(CartContext);
};
