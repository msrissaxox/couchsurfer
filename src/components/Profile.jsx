// The user profile page where users can edit their information.

import React from 'react';

const Profile = () => {
    return (
        <div className="flex flex-col h-screen p-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <p className="text-gray-700">View and edit your profile here.</p>
            {/* Add profile content here */}
        </div>
    );
};

export default Profile;