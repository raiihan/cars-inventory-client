import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import useProducts from '../../../hooks/useProducts';
import InventoryTableBody from './InventoryTableBody';
import ResponsiveTabaleData from './ResponsiveTabaleData';

const ManageInventory = () => {
    const [products] = useProducts()

    const handleDeleteItem = async id => {
        const { data } = await axios.delete(`http://localhost:5000/product/${id}`)
        if (data.deletedCount === 1) {
            toast("Deleted Successfully");
        }
    }
    return (

        <>
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
                                                handleDeleteItem={handleDeleteItem}
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
                            handleDeleteItem={handleDeleteItem}
                        />)
                    }
                </div>
            </div>
        </>

    );
};

export default ManageInventory;