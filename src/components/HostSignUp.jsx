// The signup form and user registration logic.
import React from 'react';
import Header from "./header"

const HostSignUp = () => {
    return (
        <div>
        <Header/>
        <div className="flex flex-col h-screen p-4  justify-center items-center bg-[#1E1E1E] text-white">
            <h1 className="text-2xl font-bold mb-4">Host Sign Up</h1>
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" className="border border-gray-300 rounded p-2 w-full email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input type="password" className="border border-gray-300 rounded p-2 w-full password" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Zip Code</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full zip_code" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Length of Stay</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full stay_length" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Allergies</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full allergies" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Hobbies</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full hobbies" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
            </form>
       </div>


       

      </div>
    
    );
};

export default HostSignUp;