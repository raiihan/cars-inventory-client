import React from 'react';
import img from "../../../Assets/couner-pic.jpg";

const TotalCounter = () => {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3'>
                <div className='mt-8 sm:mt-24 text-center flex justify-center'>
                    <div>
                        <div className='h-36'>
                            <h2 className='text-4xl'>1200</h2>
                            <p>Car for sale</p>
                        </div>
                        <div className='h-36'>
                            <h2 className='text-4xl'>652</h2>
                            <p>visitor per day</p>
                        </div>
                    </div>
                </div>
                <div className='hidden sm:block'>
                    <img src={img} alt="" />
                </div>
                <div className='mt-8 sm:mt-24 text-center flex justify-center'>
                    <div>
                        <div className='h-36'>
                            <h2 className='text-4xl'>8552</h2>
                            <p>Supplier Review</p>
                        </div>
                        <div className='h-36'>
                            <h2 className='text-4xl'>652</h2>
                            <p>Verified Supplier</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCounter;