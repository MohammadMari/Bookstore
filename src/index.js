// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CartProvider } from './pages/CartContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <CartProvider>
        <App />
    </CartProvider>
);
