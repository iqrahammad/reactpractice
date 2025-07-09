import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className= 'flex justify-center m-10'>

            
            <div className=" md:w-[40%] bg-amber-300 flex items-center justify-center ">

                <div className="w-full max-w-md p-8">
                    <h1 className="text-4xl font-bold text-center mb-6 text-amber-700">Register Form</h1>

                    <form className="flex flex-col space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your full name" 
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type="password" 
                                placeholder="Enter your password" 
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>

                        <p className="text-sm text-center text-gray-700">
                            Already Registered?{" "}
                            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                        </p>

                        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
