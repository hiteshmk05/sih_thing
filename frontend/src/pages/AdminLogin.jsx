import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [adminId, setAdminId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate('/admin/dashboard/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white px-16 py-12 rounded-2xl shadow-lg max-w-xl w-full">
                <h2 className="font-bold text-center mb-6" style={{ fontSize: '35px' }}>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-bold mb-2" style={{ fontSize: '20px' }} htmlFor="userId">
                            Admin ID
                        </label>
                        <input
                            type="text"
                            id="userId"
                            placeholder="Enter your ID"
                            onChange={(e) => setAdminId(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-bold mb-2" style={{ fontSize: '20px' }} htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button
                            type="submit"
                            className="w-32 bg-gray-800 text-white py-2 rounded-xl font-semibold focus:outline-none focus:bg-blue-600"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
