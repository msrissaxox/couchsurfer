// The signup form and user registration logic.

import React, { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Header from "./header";
const CommunitySignUp = () => {
    
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    zipCode: "",
    website: "",
    email: "",
    password: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, "communities"), {
        name: formData.name,
        zipCode: formData.zipCode,
        website: formData.website,
        email: formData.email,
        password: formData.password
      });
      
      console.log("Document written with ID:", docRef.id);
      alert("Form submitted successfully!");
      
      // Clear form
      setFormData({
        name: "",
        zipCode: "",
        website: "",
        email: "",
        password: ""
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-[#1E1E1E] text-white justify-center items-center ">
      <h1 className="text-2xl font-bold mb-4">Community Sign Up</h1>
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700">Name of Organization</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Zip Code</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full"
            id="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Website</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full"
            id="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded p-2 w-full"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="border border-gray-300 rounded p-2 w-full"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default CommunitySignUp;
