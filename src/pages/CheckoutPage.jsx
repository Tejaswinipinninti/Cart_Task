// CheckoutPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize navigate
    const { totalPrice } = location.state || { totalPrice: '0.00' };

    const handleCheckout = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const address = formData.get('address');
        const paymentDetails = formData.get('paymentDetails');

        // Navigate to Order Summary page with the data
        navigate('/order-summary', {
            state: { name, address, paymentDetails, totalPrice }
        });
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleCheckout}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" required />
                </div>
                <div>
                    <label>Payment Details:</label>
                    <input type="text" name="paymentDetails" required />
                </div>
                <h3>Total Price: ${totalPrice}</h3>
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
