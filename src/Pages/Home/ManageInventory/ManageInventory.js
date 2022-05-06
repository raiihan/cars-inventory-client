import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';
import InventoryTableBody from './InventoryTableBody';
import ResponsiveTabaleData from './ResponsiveTabaleData';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        const getProductQuantity = async () => {
            const { data } = await axios.get('https://hidden-retreat-56283.herokuapp.com/productCount')
            const count = data.count
            const page = Math.ceil(count / 5)
            setPages(page)
        }
        getProductQuantity();
    }, [])
    useEffect(() => {
        const getProduct = async () => {
            const url = `https://hidden-retreat-56283.herokuapp.com/products?currentPage=${currentPage}`;
            const { data } = await axios.get(url);
            setProducts(data)
            setLoading(true)
        }
        getProduct()
    }, [currentPage, products])

    const handleDeleteItem = async id => {
        const proceed = window.confirm("Are You Sure Want To Delete?");
        if (proceed) {
            const { data } = await axios.delete(`https://hidden-retreat-56283.herokuapp.com/product/${id}`)
            if (data.deletedCount === 1) {
                toast("Deleted Successfully");
            }
        }
    }
    return (

        <div className='container mx-auto'>
            <div>
                <h1 className='text-3xl text-center my-8'>If you want to add new Item <button className='text-blue-500 underline'><Link to="/additems">Please Click Here</Link></button></h1>

            </div>
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
                                            loading
                                                ?
                                                products.map(product => <InventoryTableBody
                                                    key={product._id}
                                                    product={product}
                                                    handleDeleteItem={handleDeleteItem}
                                                />)
                                                :
                                                <Loading />
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
            <div className='my-5'>
                {
                    [...Array(pages).keys()].map((number, index) => <button
                        onClick={() => setCurrentPage(number)}
                        className={`${currentPage === number ? "bg-blue-400 text-white " : "text-gray-500 bg-white border "}"py-2 mx-2 px-3 leading-tight border-gray-300 hover:bg-blue-400 hover:text-white "`}
                        key={index}>{number + 1}</button>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;