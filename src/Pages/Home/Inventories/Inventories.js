import React, { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.length
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    products.map(product => <Inventory
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
            {
                products.slice(0, 1).map(p => <Banner
                    product={p}
                />)
            }
        </div>
    );
};

export default Inventories;