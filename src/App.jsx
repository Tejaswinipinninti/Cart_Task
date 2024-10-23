import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import OrderConfirmation from './components/OrderConfrmation';


function App() {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-summary" element={<OrderConfirmation />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
