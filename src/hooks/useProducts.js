import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch('https://car-inventory.onrender.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(true)
            })
    }, []);
    return [products, loading]
}

export default useProducts;