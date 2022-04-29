import React from 'react';

const ResponsiveTabaleData = ({ product }) => {
    const { _id, name, img, price, quantity, supplier, description } = product;
    return (
        <div className='h-60 w-full shadow-2xl mx-3 my-4'>
            <div className="flex pr-2">
                <img src={img} className="w-3/5" alt="" />
                <div className='pl-2'>
                    {name}
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            <div className='w-3/5 mx-auto mt-4'>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center w-full ">Delete</button>
            </div>
        </div>
    );
};

export default ResponsiveTabaleData;