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
      <div className="flex flex-col h-screen p-4 justify-center items-center bg-[#1E1E1E] text-white">
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
