//The page where users can search for couches available for surfing.

import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig.js';

const Explore = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from Firestore
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'hosts'));
                const usersList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUsers(usersList);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
    return (
        <div className="flex flex-col h-screen p-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Explore Users</h1>
            <p className="text-gray-700">List of hosts and tenants</p>
            <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.name}>
                            {/* Display user information */}
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            {/* Add more fields as necessary */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Explore;