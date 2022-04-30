import React from 'react';
import Banner from './Banner/Banner';
import Inventories from './Inventories/Inventories';

const Home = () => {
    return (
        <>
            <Banner />

            <div className='container mx-auto'>

                <Inventories />
            </div>
        </>
    );
};

export default Home;