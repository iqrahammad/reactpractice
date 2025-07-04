import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex min-h-screen'>
            {/* Left Side - Image */}
            <div className='w-1/2'>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wZfoXiFyx-AeYyo6r7W8yFCphGqYpRF97w&s" 
                    alt="Login Illustration"
                    className='w-full h-full object-cover'
                />
            </div>

            {/* Right Side - Form */}
            <div className='w-1/2 bg-amber-600 flex items-center justify-center'>
                <div className='w-full max-w-md p-10'>
                    <h1 className='text-4xl font-bold text-amber-100 text-center mb-6'>
                        Login Form
                    </h1>

                    <form className='flex flex-col space-y-4'>
                        <div>
                            <label className='block text-white'>Email</label>
                            <input 
                                type="email" 
                                placeholder='Enter your email'
                                className='w-full p-2 rounded border border-gray-300'
                            />
                        </div>

                        <div>
                            <label className='block text-white'>Password</label>
                            <input 
                                type="password" 
                                placeholder='Enter your password'
                                className='w-full p-2 rounded border border-gray-300'
                            />
                        </div>

                        <p className='text-sm text-white text-center'>
                            Not Registered?{" "}
                            <Link to="/register" className='text-blue-300 underline'>Register</Link>
                        </p>

                        <button className='bg-white text-amber-700 font-bold py-2 rounded hover:bg-gray-200'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
