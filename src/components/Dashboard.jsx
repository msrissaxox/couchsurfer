//The main dashboard for logged-in users.


import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen p-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="text-gray-700">Welcome to your dashboard!</p>
            {/* Add dashboard content here */}
        </div>
    );
};

export default Dashboard;