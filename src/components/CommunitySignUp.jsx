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

      <section class="bg-white dark:bg-gray-900 pt-32">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {/* <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a> */}
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Connect with Community Support </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        We invite local businesses and organizations to join us in our mission to connect those in need with compassionate members of our community. By partnering with us, you can help provide essential resources and support to individuals seeking a fresh start. All participants will undergo background checks to ensure the safety and peace of mind of everyone involved. Together, we can make a meaningful impact and foster a supportive environment where everyone thrives. Let's work together to strengthen our community and extend a helping hand to those who need it most!

</p>
        
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">

        </div> 
    </div>
</section>
      <div className="flex flex-col h-auto p-4 bg-[#1E1E1E] text-white justify-center items-center">
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
