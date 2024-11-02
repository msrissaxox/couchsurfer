// The signup form and user registration logic.


// Get a reference to the form
// const form = document.getElementById("communityForm");

// // Add an event listener for form submission
// communityForm.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent default form submission

//   // Get data from form fields
//   const nameOfOrganization = document.getElementById("name").value;
//   const zipCode = document.getElementById("zip_code").value;
//   const website = document.getElementById("website").value;
//  const email = document.getElementById("email").value;
//
// const password = 
//   // ... other form fields

//   // Create a new document in the "user_registration" collection
//   db.collection("user_registration").add({
//     name: name,
//     email: email,
//     // ... other form fields
//   })
//   .then(docRef => {
//     console.log("Document written with ID:", docRef.id);
//     // Optionally, display a success message to the user
//     alert("Form submitted successfully!");
//   })
//   .catch(error => {
//     console.error("Error adding document: ", error);
//     // Optionally, display an error message to the user
//     alert("An error occurred while submitting the form.");
//   });
// });





import React from 'react';

const CommunitySignUp = () => {
    return (
        <div>
        <div className="flex flex-col h-screen p-4 bg-gray-100 justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Community Sign Up</h1>
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" id="communityForm">
                <div className="mb-4">
                    <label className="block text-gray-700">Name of Organization</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full" id="name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 zip_code">Zip Code</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full" id="zip_code" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Website</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full" id="website" />
                </div>
                <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="border border-gray-300 rounded p-2 w-full" id="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="border border-gray-300 rounded p-2 w-full" id="password"
            />
          </div>
                
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
            </form>
       </div>
          <div className="flex flex-col h-screen p-4 bg-gray-100 justify-center items-center">
          <h1 className="text-2xl font-bold mb-4">Tenants Sign Up</h1>
          <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" className="border border-gray-300 rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input type="password" className="border border-gray-300 rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Zip Code</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Length of Stay</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Allergies</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Hobbies</label>
                    <input type="text" className="border border-gray-300 rounded p-2 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
            </form>
      </div>
      </div>
    
    );
};

export default CommunitySignUp;