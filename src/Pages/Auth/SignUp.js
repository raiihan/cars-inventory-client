import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { FaUnlockAlt, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import SocialLogin from './SocialLogin';
import auth from "../../Firebase.init";
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [eyes, setEyes] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

    if (loading || updating) {
        return <Loading />
    }
    const onSubmit = async data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        console.log(data, email, password, name)
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        reset()
    };

    return (
        <div className='container mx-auto min-h-screen md:flex md:items-center'>
            <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto shadow-2xl mt-5 md:mt-0 p-6">
                <h2 className='text-center text-3xl'>Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label htmlFor="name-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaUser className='w-5 h-5 text-gray-500' />
                            </div>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                id="name-address-icon"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                                placeholder="name" />
                        </div>
                    </div>
                    {errors.name?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Name is required!</p>}
                    <div className="mb-6">
                        <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <MdEmail className='w-5 h-5 text-gray-500' />
                            </div>
                            <input
                                {...register("email", { required: true, pattern: /\S+@\S+\.\S+/i })}
                                type="text"
                                id="email-address-icon"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                                placeholder="name@example.com" />
                        </div>
                    </div>
                    {errors.email?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Email is required!</p>}
                    {errors.email?.type === 'pattern' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Invalid Email! Please input a valid a email</p>}
                    <div className="mb-6">
                        <label htmlFor="password-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Your Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaUnlockAlt className='w-5 h-5 text-gray-500' />
                            </div>
                            <div
                                onClick={() => setEyes(!eyes)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                                {eyes ? <BsEyeSlashFill className='w-5 h-5 text-gray-500' /> : <BsEyeFill className='w-5 h-5 text-gray-500' />}
                            </div>
                            <input
                                {...register("password", { required: true, minLength: 7 })}
                                type={eyes ? "text" : "password"}
                                id="password-address-icon"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="password" />
                        </div>
                    </div>
                    {errors.password?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Password is required!</p>}
                    {errors.password?.type === 'minLength' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Minimum Length 7 characters!</p>}
                    {error && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> {error.code}</p>}
                    <div className='w-1/2 mx-auto mb-6'>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full  px-5 py-2.5 text-center ">Sign Up</button>
                    </div>
                </form>
                <SocialLogin />
                <div className='text-center'>
                    <p>You have an accout? <Link to="/login" className='text-blue-500'>Login</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;