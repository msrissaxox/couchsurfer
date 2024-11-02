// The signup form and user registration logic.

import React from 'react';

const SignupPage = () => {
    return (
        <div className="flex flex-col h-screen p-4 bg-gray-100 justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" className="border border-gray-300 rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input type="password" className="border border-gray-300 rounded p-2 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;