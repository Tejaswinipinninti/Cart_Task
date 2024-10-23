// Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [form, setForm] = useState({ name: '', address: '', payment: '' });
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrderPlaced(true);
        clearCart();
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    if (orderPlaced) {
        return (
            <div>
                <h2>Order Confirmation</h2>
                <p>Thank you, {form.name}! Your order has been placed successfully.</p>
                <p>Shipping Address: {form.address}</p>
                <p>Total Price: ${totalPrice}</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" name="address" value={form.address} onChange={handleChange} required />
            </div>
            <div>
                <label>Payment Details:</label>
                <input type="text" name="payment" value={form.payment} onChange={handleChange} required />
            </div>
            <button type="submit">Place Order</button>
        </form>
    );
};

export default Checkout;
