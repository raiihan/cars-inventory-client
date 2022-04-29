import React from 'react';
import Inventories from './Inventories/Inventories';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-blue-600 text-4xl text-center'>Welcome to the world</h1>
            <Inventories />
        </div>
    );
};

export default Home;