// The signup form and user registration logic.
import React, { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

//ADD NAME
const TenantSignUp = () => {

      // State for form fields need to edit
  const [formData, setFormData] = useState({
    name: "",
    zip_code: "",
    stay_length: "",
    allergies: "",
    hobbies: "",
    email: "",
    password: ""
  });


 // Handle input changes need to edit
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
      const docRef = await addDoc(collection(db, "tenants"), {
        name: formData.name,
        zip_code: formData.zip_code,
        stay_length: formData.stay_length,
        allergies: formData.allergies,
        hobbies: formData.hobbies,
        email: formData.email,
        password: formData.password
      });
      
      console.log("Document written with ID:", docRef.id);
      alert("Form submitted successfully!");
      
      // Clear form
      setFormData({
        name: "",
        zip_code: "",
        stay_length: "",
        allergies: "",
        hobbies: "",
        email: "",
        password: ""
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <div className="flex flex-col h-screen p-4 bg-gray-100 justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Tenant Sign Up</h1>
        <form className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="border border-gray-300 rounded p-2 w-full" id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="border border-gray-300 rounded p-2 w-full" id="password"
              value={formData.password}
            onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Zip Code</label>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 w-full" id="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Length of Stay</label>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 w-full" id="stay_length"
              value={formData.stay_length}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Allergies</label>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 w-full" id="allergies"
              value={formData.allergies}
            onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Hobbies</label>
            <input
              type="text"
              className="border border-gray-300 rounded p-2 w-full" id="hobbies"
              value={formData.hobbies}
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
    </div>
  );
};

export default TenantSignUp;
