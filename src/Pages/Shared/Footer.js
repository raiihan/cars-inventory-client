import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='bg-[#080808] text-white py-4 text-center mt-5'>
            <p >Copyright &copy;Silvan {year}</p>
        </footer>
    );
};

export default Footer;