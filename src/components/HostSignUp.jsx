// The signup form and user registration logic.
import Header from "./header"
import React, { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
//ADD NAME
const HostSignUp = () => {
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
          const docRef = await addDoc(collection(db, "hosts"), {
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
        <Header/>
        <div className="flex flex-col h-screen p-4  justify-center items-center bg-[#1E1E1E] text-white">
            <h1 className="text-2xl font-bold mb-4">Host Sign Up</h1>
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm"
            onSubmit={handleSubmit}>
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