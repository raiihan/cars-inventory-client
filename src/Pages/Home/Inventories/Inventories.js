import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                products.slice(0, 6).map(product => <Inventory
                    key={product._id}
                    product={product}
                />)
            }
        </div>

    );
};

export default Inventories;