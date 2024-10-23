// OrderConfirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';


const OrderConfirmation = () => {
    const location = useLocation();
    const { name, address, paymentDetails, totalPrice } = location.state || {};

    return (
        <div>
            <h2>Order Confirmation</h2>
            <h3>Thank you for your order!</h3>
            <h4>Order Summary:</h4>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
            <p>Payment Details: {paymentDetails}</p>
            <h3>Total Price: ${totalPrice}</h3>
        </div>
    );
};

export default OrderConfirmation;
