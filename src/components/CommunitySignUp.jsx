// The signup form and user registration logic.
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Header from "./header"; // Ensure this is the correct import for your Header component

const CommunitySignUp = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    zipCode: "",
    website: "",
    email: "",
    password: "",
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    // Clear error for the field being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {};
    if (!formData.name) newErrors.name = "Please enter Name of Organization";
    if (!formData.zipCode) newErrors.zipCode = "Please enter Zip Code";
    if (!formData.website) newErrors.website = "Please enter Website";
    if (!formData.email) newErrors.email = "Please enter Email";
    if (!formData.password) newErrors.password = "Please enter Password";

    // Set errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop form submission if there are errors
    }

    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, "communities"), {
        name: formData.name,
        zipCode: formData.zipCode,
        website: formData.website,
        email: formData.email,
        password: formData.password,
      });

      console.log("Document written with ID:", docRef.id);
      alert("We Will Be In Touch Soon!");

      // Clear form
      setFormData({
        name: "",
        zipCode: "",
        website: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <Header /> {/* Include your header component */}
      <div className="flex flex-col h-screen p-4 bg-[#1E1E1E] text-white justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Community Sign Up</h1>
        <form
          className="bg-white p-6 rounded shadow-md w-full max-w-sm text-black"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Name of Organization</label>
            <input
              type="text"
              className={`border border-gray-300 rounded p-2 w-full ${errors.name ? "border-red-500" : ""}`}
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Zip Code</label>
            <input
              type="text"
              className={`border border-gray-300 rounded p-2 w-full ${errors.zipCode ? "border-red-500" : ""}`}
              id="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
            {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Website</label>
            <input
              type="text"
              className={`border border-gray-300 rounded p-2 w-full ${errors.website ? "border-red-500" : ""}`}
              id="website"
              value={formData.website}
              onChange={handleChange}
            />
            {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className={`border border-gray-300 rounded p-2 w-full ${errors.email ? "border-red-500" : ""}`}
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className={`border border-gray-300 rounded p-2 w-full ${errors.password ? "border-red-500" : ""}`}
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
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

export default CommunitySignUp;
