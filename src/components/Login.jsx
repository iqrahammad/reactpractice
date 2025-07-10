import React from 'react'
import { Link } from 'react-router-dom'
import ParticlesApp from './Practical'

const Login = () => {
    return (
        <>
        <ParticlesApp />
        <div className='flex justify-center m-13'>

            <div className='w-[40%] bg-amber-600 flex items-center justify-center'>
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
                                className='w-full p-2 rounded border border-gray-300' />
                        </div>

                        <div>
                            <label className='block text-white'>Password</label>
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='w-full hover:bg-amber-50 p-2 rounded border border-gray-300' />
                        </div>

                        <p className='text-sm text-white text-center'>
                            Not Registered?{" "}
                            <Link to="/register" className='text-blue-300 underline'>Register</Link>
                        </p>

                        <button className='bg-white hover:bg-amber-200 text-amber-700 font-bold py-2 rounded'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div></>
    )
}

export default Login
