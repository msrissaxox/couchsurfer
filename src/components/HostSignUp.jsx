import Header from "./header";
import React, { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const HostSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    zip_code: "",
    stay_length: "",
    allergies: "",
    hobbies: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
    
    // Clear error for this field when the user starts typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [id]: ""
    }));
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const newErrors = {};
    
    // Validate form fields
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = "This field is required.";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "hosts"), formData);
      console.log("Document written with ID:", docRef.id);
      alert("We Will Be In Touch Soon!");
      
      // Clear form and errors
      setFormData({
        name: "",
        zip_code: "",
        stay_length: "",
        allergies: "",
        hobbies: "",
        email: "",
        password: ""
      });
      setErrors({});
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <Header />

      <section class="bg-white dark:bg-gray-900 pt-32">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {/* <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a> */}
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome Hosts! Your support can make a real difference in our community! </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Becoming a host is a direct step to address the problem of homelessness here in Orlando. 
          As a host, you will be our proverbial boots on the ground. 
          Hosts are responsible for receiving the tenants on our platform, and helping them get set up with all of the resources they need while they stay in your home. 
          All of 407 Stay's tenants are screened and vetted to ensure your safety as you host. By welcoming them into your home, you're providing vital assistance to individuals looking for a fresh start. 

</p>
        
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">

        </div> 
    </div>
</section>

      <div className="flex flex-col h-auto p-4 justify-center items-center bg-[#1E1E1E] text-white">
        <h1 className="text-2xl font-bold mb-4">Host Sign Up</h1>
        <form className="bg-white p-6 rounded shadow-md w-full max-w-sm text-black" onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div className="mb-4" key={key}>
              <label className="block text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}:</label>
              <input
                type={key === "email" ? "email" : key === "password" ? "password" : "text"}
                id={key}
                className={`border border-gray-300 rounded p-2 w-full ${errors[key] ? 'border-red-500' : ''}`}
                value={formData[key]}
                onChange={handleChange}
              />
              {errors[key] && <small className="text-red-500">{errors[key]}</small>}
            </div>
          ))}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default HostSignUp;
