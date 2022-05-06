import React from 'react';
import NotFound404 from "../../Assets/404.png";
const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col  min-h-screen'>
            <h2 className='text-center text-4xl mb-5 '>The page you are Looking for dose not Exist</h2>
            <img src={NotFound404} alt="Not Found" />
        </div>
    );
};

export default NotFound;