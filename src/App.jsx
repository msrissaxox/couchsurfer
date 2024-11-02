import { useState } from 'react';
import { auth, db } from './firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';


function App() {
  const [testEmail, setTestEmail] = useState('');
  const [testPassword, setTestPassword] = useState('');
  const [message, setMessage] = useState('');

  const testFirebase = async (e) => {
    e.preventDefault();
    try {
      // Test Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, testEmail, testPassword);
      
      // Test Database
      await addDoc(collection(db, 'users'), {
        email: testEmail,
        createdAt: new Date().toISOString()
      });

      setMessage('Success! Authentication and Database are working!');
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Firebase Test</h1>
      <form onSubmit={testFirebase} className="space-y-4">
        <div>
          <input
            type="email"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            placeholder="Test email"
            className="border p-2"
          />
        </div>
        <div>
          <input
            type="password"
            value={testPassword}
            onChange={(e) => setTestPassword(e.target.value)}
            placeholder="Test password"
            className="border p-2"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Test Firebase
        </button>
      </form>
      {message && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          {message}
        </div>
      )}
    </div>
  );
}

export default App;