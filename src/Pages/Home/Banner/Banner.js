import React from 'react';

const Banner = ({ product }) => {
    const { _id, name, img, price, quantity, supplier, description } = product;
    return (
        <>
            <div className='bg-white rounded-lg border shadow-md lg:w-3/4 mx-auto'>
                <img className="object-cover w-full h-96 rounded-t-lg lg:h-auto mx-auto lg:w-4/5 md:rounded-none md:rounded-l-lg" src={img} alt="" />
                <div className="flex flex-col md:items-center  md:flex-row   md:px-20">
                    <div className="flex flex-col justify-between p-4 leading-normal w-3/5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>

                    <div className="flex flex-col justify-between p-4 leading-normal ">
                        <p className="mb-3 font-normal text-gray-700 ">Price : ${price}</p>
                        <p className="mb-3 font-normal text-gray-700 "><strong>Quantity: {quantity}</strong></p>
                        <p className="mb-3 font-normal text-gray-700 "><strong>Supplier: {supplier}</strong></p>
                    </div>

                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4 mx-auto mt-7">

                    <form className=' sm:shadow-md sm:p-4'>
                        <h3 className='text-center text-3xl'>Re-stock</h3>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="number" name="floating" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Input new quantity</label>
                        </div>
                        <div className='w-3/5 mx-auto'>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center ">Submit</button>
                        </div>
                    </form>
                    <div className="sm:flex sm:items-center sm:shadow-md sm:py-3 ">
                        <div className='w-3/5 mx-auto '>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center w-full ">Extra large</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;