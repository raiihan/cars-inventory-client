import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        toast('Thanks your Feedback')
        reset()
    };
    return (
        <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto shadow-2xl mt-5 md:mt-20 p-6">
            <h2 className='text-center text-3xl'>Send us Your Feedback</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label htmlFor="name-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                    <div className="relative">
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            id="name-address-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                            placeholder="Name" />
                    </div>
                </div>
                {errors.name?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Nmae is required!</p>}
                <div className="mb-6">
                    <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                    <div className="relative">
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
                    <label htmlFor="message-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Your Message</label>
                    <div className="relative">
                        <textarea
                            {...register("message", { required: true })}
                            type="text"
                            id="message-address-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                            placeholder="Message" />
                    </div>
                </div>
                {errors.message?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Message is required!</p>}



                <div className='w-1/2 mx-auto mb-6'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full  px-5 py-2.5 text-center ">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;