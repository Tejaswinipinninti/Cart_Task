import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    // Helper function to chunk the products into rows of four
    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const rows = chunkArray(products, 4); // Split products into rows of 4

    return (
        <div className="product-list">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    {row.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
