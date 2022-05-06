import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from "../../Firebase.init";
import logo from '../../Assets/logo.png'

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [hamburger, setHamburger] = useState(false);
    return (

        <nav className="bg-white shadow-lg border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-700">Cars Inventory</span>
                </Link>
                <button onClick={() => setHamburger(!hamburger)} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className={`${hamburger ? 'hidden' : 'block'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className={`${hamburger ? 'block' : 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`${hamburger ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "text-blue-600 block py-2 pr-4 pl-3 md:p-0" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "}
                            >
                                Home
                            </NavLink>
                        </li>


                        {
                            user
                            &&
                            <>
                                <li>
                                    <NavLink
                                        to="/manageinventory"
                                        className={({ isActive }) => isActive ? "text-blue-600 block py-2 pr-4 pl-3 md:p-0" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "}
                                    >
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/additems"
                                        className={({ isActive }) => isActive ? "text-blue-600 block py-2 pr-4 pl-3 md:p-0" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "}
                                    >
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/myitems"
                                        className={({ isActive }) => isActive ? "text-blue-600 block py-2 pr-4 pl-3 md:p-0" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "}
                                    >
                                        My Items
                                    </NavLink>
                                </li>
                            </>

                        }
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) => isActive ? "text-blue-600 block py-2 pr-4 pl-3 md:p-0" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => isActive ? "text-blue-600 block py-2 pr-4 pl-3 md:p-0" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "}
                            >
                                Contacts
                            </NavLink>
                        </li>
                        <li>
                            {
                                user
                                    ?
                                    <NavLink
                                        to="/login"
                                        onClick={() => signOut(auth)}
                                        className={({ isActive }) => isActive ? "text-blue-600 block py-2 pr-4 pl-3 md:p-0" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "}
                                    >
                                        Logout
                                    </NavLink>
                                    :
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) => isActive ? "text-blue-600 block py-2 pr-4 pl-3 md:p-0" : "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "}
                                    >
                                        Login
                                    </NavLink>
                            }

                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;