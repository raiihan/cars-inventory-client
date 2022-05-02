import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import InventoryTableBody from '../ManageInventory/InventoryTableBody';
import ResponsiveTabaleData from '../ManageInventory/ResponsiveTabaleData';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const email = user?.email;
        fetch(`http://localhost:5000/products?email=${email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user, products])
    return (
        <div className='container mx-auto'>
            <div className="sm:flex flex-col hidden ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>

                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Images
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Quantity
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Price
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(product => <InventoryTableBody
                                            key={product._id}
                                            product={product}
                                        />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:hidden'>
                {
                    products.map(product => <ResponsiveTabaleData
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default MyItems;