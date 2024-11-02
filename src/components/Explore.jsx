// Explore.js
import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig.js';

const Explore = () => {
    const [hosts, setHosts] = useState([]);
    const [tenants, setTenants] = useState([]);
    const [communities, setCommunities] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('hosts'); // Default category
    const [sidebarWidth, setSidebarWidth] = useState(256); // Default width for sidebar

    useEffect(() => {
        // Fetch users from Firestore
        const fetchUsers = async () => {
            try {
                const querySnapshotH = await getDocs(collection(db, 'hosts'));
                const fetchedHosts = querySnapshotH.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setHosts(fetchedHosts);
                console.log('Hosts fetched:', fetchedHosts);

                const querySnapshotT = await getDocs(collection(db, 'tenants'));
                const fetchedTenants = querySnapshotT.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setTenants(fetchedTenants);
                console.log('Tenants fetched:', fetchedTenants);

                const querySnapshotC = await getDocs(collection(db, 'communities'));
                const fetchedCommunities = querySnapshotC.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setCommunities(fetchedCommunities);
                console.log('Communities fetched:', fetchedCommunities);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleMouseDown = (e) => {
        const startX = e.clientX;

        const handleMouseMove = (e) => {
            const newWidth = Math.max(100, startX - e.clientX + sidebarWidth);
            setSidebarWidth(newWidth);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    // Render based on the current category
    const renderContent = () => {
        let currentData;
        let title;

        switch (currentCategory) {
            case 'hosts':
                currentData = hosts;
                title = 'List of Hosts';
                break;
            case 'tenants':
                currentData = tenants;
                title = 'List of Tenants';
                break;
            case 'communities':
                currentData = communities;
                title = 'List of Communities';
                break;
            default:
                currentData = [];
                title = '';
        }

        return (
            <>
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <div>
                    <ul>
                        {currentData.map((user) => (
                            <li key={user.id} className='border-4 p-4 rounded-lg border-white my-2'>
                                {/* Display user information */}
                                {currentCategory === 'communities' ? (
                                    <>
                                        <p><strong>Name:</strong> {user.name}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Website:</strong> {user.website}</p>
                                        <p><strong>Zip Code:</strong> {user.zipCode}</p>
                                    </>
                                ) : (
                                    <>
                                        <p><strong>Name:</strong> {user.name}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Stay Length:</strong> {user.stay_length}</p>
                                        <p><strong>Hobbies:</strong> {user.hobbies}</p>
                                        <p><strong>Allergies:</strong> {user.allergies}</p>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    };

    return (
        <div className="flex h-screen bg-[#1E1E1E] text-white">
            <div style={{ width: sidebarWidth }} className="bg-gray-800 text-white h-auto p-4 relative">
                <h2 className="text-xl font-bold mb-4">Navigation</h2>
                <ul>
                    <li className="mb-2">
                        <a 
                            href="#" 
                            className="hover:underline" 
                            onClick={() => setCurrentCategory('hosts')}
                        >
                            Hosts
                        </a>
                    </li>
                    <li className="mb-2">
                        <a 
                            href="#" 
                            className="hover:underline" 
                            onClick={() => setCurrentCategory('tenants')}
                        >
                            Tenants
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#" 
                            className="hover:underline" 
                            onClick={() => setCurrentCategory('communities')}
                        >
                            Communities
                        </a>
                    </li>
                </ul>
                <div
                    onMouseDown={handleMouseDown}
                    className="cursor-ew-resize absolute right-0 top-0 h-auto w-2 bg-transparent"
                    style={{ zIndex: 10 }}
                />
            </div>
            <div className="flex flex-col flex-grow p-4">
                {renderContent()}
            </div>
        </div>
    );
};

export default Explore;
