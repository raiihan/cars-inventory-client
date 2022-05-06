import React from 'react';
import loading from "../../Assets/Loading_icon.gif";
const Loading = () => {
    return (
        <div className='flex justify-center items-center flex-col  min-h-screen'>
            <h2 className='text-center text-4xl mb-5 '>Please Keep Patience</h2>
            <img src={loading} alt="Not Found" />
        </div>
    );
};

export default Loading;