import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Navigation, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
const SupplierCollection = () => {
    const [products, setProducts] = useState([]);
    const handleSearchSupplierProduct = e => {
        e.preventDefault();
        const supplier = e.target.supplier.value;
        console.log(supplier);
        const url = `https://hidden-retreat-56283.herokuapp.com/productBySupplier?supplier=${supplier}`
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setProducts(data)
            })
    }
    return (

        <>
            <div className='my-4'>
                <h2 className='text-center text-4xl text-blue-500 mb-3'>View all products of a supplier</h2>

                <form onSubmit={handleSearchSupplierProduct}>
                    <div className="sm:flex items-start justify-center mb-6">
                        <div className='mr-3 mb-4 w-full sm:w-3/5'>
                            <input type="text" name='supplier' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required="" />
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Search</button>
                    </div>
                </form>

            </div>
            <Swiper
                modules={[Navigation, Scrollbar, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={true}
                navigation={true}
                scrollbar={{ draggable: true }}
            >

                {

                    products.map(product => <SwiperSlide>

                        <div className='relative parent'>
                            <img className='w-full mb-4' src={product.img} alt="" />
                            <div className="absolute w-full top-0 left-0 h-full backdrop-blur-sm flex justify-center items-center opacity-0 hover:opacity-100 duration-600">
                                <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                ><Link to={`/inventory/${product._id}`}>See Details</Link></button>
                            </div>
                        </div>

                    </SwiperSlide>)

                }
            </Swiper>
        </>

    );
};

export default SupplierCollection;