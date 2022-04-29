import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../Firebase/Firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const body = {
            name: data.name,
            email: user?.email,
            description: data.description,
            img: data.img,
            price: data.price,
            quantity: data.quantity,
            supplier: data.supplier,
        }
        console.log(body);
        // reset()
    };
    return (
        <div className='container mx-auto'>
            <div className="w-full sm:w-3/4 lg:w-3/5 mx-auto mt-5 md:mt-0 p-6">
                <h3 className='text-center text-3xl '>Add New Items</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label htmlFor="name-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            id="name-address-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 rounded-lg block w-full pl-2 p-2.5  "
                            placeholder="Name" />
                    </div>
                    {errors.name?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Name is required!</p>}
                    <div className="mb-6">
                        <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                        <input
                            {...register("email", { required: true })}
                            value={user?.email}
                            type="text"
                            id="email-address-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 rounded-lg block w-full pl-2 p-2.5  "
                            placeholder="Email" />
                    </div>
                    {errors.email?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Email is required!</p>}
                    <div className="mb-6">
                        <label htmlFor="desc-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                        <textarea
                            {...register("description", { required: true })}
                            type="text"
                            id="desc-address-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 rounded-lg block w-full pl-2 p-2.5  "
                            placeholder="Name" ></textarea>
                    </div>
                    {errors.description?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Description is required!</p>}
                    <div className="mb-6">
                        <label htmlFor="photo-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Photo url</label>
                        <input
                            {...register("img", { required: true })}
                            type="text"
                            id="photo-address-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 rounded-lg block w-full pl-2 p-2.5  "
                            placeholder="Photo url" />
                    </div>
                    {errors.img?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Photo url is required!</p>}
                    <div className="mb-6">
                        <label htmlFor="price-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                        <input
                            {...register("price", { required: true })}
                            type="text"
                            id="price-address-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 rounded-lg block w-full pl-2 p-2.5  "
                            placeholder="Price" />
                    </div>
                    {errors.price?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Price is required!</p>}
                    <div className="mb-6">
                        <label htmlFor="quantity-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Quantity</label>
                        <input
                            {...register("quantity", { required: true })}
                            type="number"
                            id="quantity-address-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 rounded-lg block w-full pl-2 p-2.5  "
                            placeholder="Quantity" />
                    </div>
                    {errors.quantity?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Quantity is required!</p>}
                    <div className="mb-6">
                        <label htmlFor="supplier-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Supplier Name</label>
                        <input
                            {...register("supplier", { required: true })}
                            type="text"
                            id="supplier-address-icon"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 rounded-lg block w-full pl-2 p-2.5  "
                            placeholder="Supplier Name" />
                    </div>
                    {errors.supplier?.type === 'required' && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> Supplier Name is required!</p>}
                    <div className='w-1/2 mx-auto mb-6'>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full  px-5 py-2.5 text-center ">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;