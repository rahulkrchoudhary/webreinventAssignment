import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { TEInput, TERipple } from "tw-elements-react";
import loginimg from "../assets/login.png"

const LoginScreen = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate, userInfo]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const res = await login(data).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
<section className="container mx-auto my-4 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg " >

      
       <div className="container mx-auto h-full px-4 md:px-8 py-8 md:py-16 ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
         
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src={loginimg}
              className="w-full"
              alt="Phone image"
            />
          </div>
         
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="mb-4">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required' })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      {isLoading && <Loader />}

      <div className="py-3">
        <p>New Customer? <Link to='/register' className="text-blue-500">Register</Link></p>
      </div>
    </div>
    </div>
          </div>
    </section>
  );
};

export default LoginScreen;
