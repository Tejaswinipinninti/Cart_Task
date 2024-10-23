// ProductCard.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(product);
        navigate('/cart'); // Navigate to the Cart page after adding to the cart
    };

    return (
        
        <div className="product-card">
            <img src={product.image} alt={product.title} style={{width:"250px",height:"200px"}}/>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
