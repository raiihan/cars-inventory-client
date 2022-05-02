import React from 'react';
import Banner from './Banner/Banner';
import Inventories from './Inventories/Inventories';
import SupplierCollection from './SupplierCollection/SupplierCollection';
import TotalCounter from './TotalCounter/TotalCounter';




const Home = () => {
    return (
        <>
            <Banner />

            <div className='container mx-auto'>

                <Inventories />
                <TotalCounter />
                <SupplierCollection />
            </div>
        </>
    );
};

export default Home;