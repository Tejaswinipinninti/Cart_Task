// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            // If item already exists, increment the quantity
            setCart(cart.map(cartItem =>
                cartItem.id === item.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                : cartItem
            ));
        } else {
            // Add new item to cart with image URL and other details
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const incrementQuantity = (id) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decrementQuantity = (id) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
