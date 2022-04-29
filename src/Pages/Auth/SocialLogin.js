import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])
    if (loading) {
        return <p>Loding...</p>
    }
    return (
        <div className='w-full mx-auto mb-6'>
            {error && <p className="mb-2 text-sm text-red-600"><span className="font-medium">Oops!</span> {error.code}</p>}
            <button
                onClick={() => signInWithGoogle()}
                type="submit"
                className="text-gray-900 bg-gray-50  border border-gray-300 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full  px-5 py-2.5 text-center flex items-center justify-center">
                <FcGoogle size={25} />
                <span className='pl-3'>Continue with Google</span></button>
        </div>
    );
};

export default SocialLogin;