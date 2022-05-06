import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Inventory from '../Inventory/Inventory';
import Loading from '../../Shared/Loading';

const Inventories = () => {
    const [products, loading] = useProducts();
    const navigate = useNavigate();

    return (
        <>
            {
                loading
                    ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                        {products.slice(0, 6).map(product => <Inventory
                            key={product._id}
                            product={product}
                        />)
                        }
                    </div>
                    :
                    <Loading />
            }
            <div className='w-3/5 mx-auto mt-5'>
                <button
                    onClick={() => navigate('/manageinventory')}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center w-full ">Manage Inventory</button>
            </div>
        </>

    );
};

export default Inventories;