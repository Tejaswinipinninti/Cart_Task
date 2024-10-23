// CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    // Calculate total items and total price dynamically
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

    // Log the cart, total items, and total price for debugging
    console.log('Cart:', cart);
    console.log('Total Items:', totalItems);
    console.log('Total Price:', totalPrice);

    if (cart.length === 0) return <p>Your cart is empty.</p>;

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="cart-item">
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                    <button onClick={() => decrementQuantity(item.id)} disabled={item.quantity <= 1}>-</button>
                    <button onClick={() => removeFromCart(item.id)}><i class="bi bi-trash3"></i></button>
                </div>
            ))}
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: ${totalPrice}</h3>
            <button onClick={() => navigate('/checkout', { state: { totalPrice } })}>Proceed to Checkout</button>
        </div>
    );
};

export default CartPage;
