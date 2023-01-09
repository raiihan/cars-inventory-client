import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import InventoryTableBody from '../ManageInventory/InventoryTableBody';
import ResponsiveTabaleData from '../ManageInventory/ResponsiveTabaleData';

const MyItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getOrder = async () => {
            const email = user?.email;
            const url = `https://car-inventory.onrender.com/myorder?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setProducts(data)
            } catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrder();
    }, [user, products]);
    const handleDeleteItem = async id => {
        const proceed = window.confirm("Are You Sure Want To Delete?");
        if (proceed) {
            const { data } = await axios.delete(`https://car-inventory.onrender.com/product/${id}`)
            if (data.deletedCount === 1) {
                toast("Deleted Successfully");
            }
        }
    }
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
    );
};

export default MyItems;