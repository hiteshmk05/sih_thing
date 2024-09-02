import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const navigate = useNavigate();
    
    const [patients, setPatients] = useState([
        { id: 1, name: 'John Doe', age: 45, gender: 'Male', weight: 75, bp: '120/80' },
        { id: 2, name: 'Jane Smith', age: 29, gender: 'Female', weight: 65, bp: '110/70' },
        { id: 3, name: 'Robert Johnson', age: 52, gender: 'Male', weight: 85, bp: '130/85' },
    ]);

    const [newPatient, setNewPatient] = useState({
        id: '',
        name: '',
        age: '',
        gender: '',
        weight: '',
        bp: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPatient({ ...newPatient, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPatients([...patients, newPatient]);
        setNewPatient({ id: '', name: '', age: '', gender: '', weight: '', bp: '' });
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="mb-8 flex justify-between items-center">
                <div className="flex-grow text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
                    <p className="text-gray-600">Manage Patient Information with Ease</p>
                </div>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                >
                    Logout
                </button>
            </header>

            <main>
                <div className="bg-white shadow rounded-lg p-6 mb-3 w-full mx-auto">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Add New Patient</h2>
                    <form onSubmit={handleSubmit} className="mb-8 grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-700">ID</label>
                            <input
                                type="text"
                                name="id"
                                value={newPatient.id}
                                onChange={handleInputChange}
                                className="bg-gray-100 p-2 border border-gray-300 rounded"
                                placeholder="Patient ID"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={newPatient.name}
                                onChange={handleInputChange}
                                className="bg-gray-100 p-2 border border-gray-300 rounded"
                                placeholder="Patient Name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-700">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={newPatient.age}
                                onChange={handleInputChange}
                                className="bg-gray-100 p-2 border border-gray-300 rounded"
                                placeholder="Patient Age"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-700">Gender</label>
                            <select
                                name="gender"
                                value={newPatient.gender}
                                onChange={handleInputChange}
                                className="bg-gray-100 p-2 border border-gray-300 rounded"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-700">Weight (kg)</label>
                            <input
                                type="number"
                                name="weight"
                                value={newPatient.weight}
                                onChange={handleInputChange}
                                className="bg-gray-100 p-2 border border-gray-300 rounded"
                                placeholder="Weight in kg"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-700">Blood Pressure</label>
                            <input
                                type="text"
                                name="bp"
                                value={newPatient.bp}
                                onChange={handleInputChange}
                                className="bg-gray-100 p-2 border border-gray-300 rounded"
                                placeholder="BP (e.g., 120/80)"
                            />
                        </div>
                    </form>
                    <div className='flex items-center justify-center'>
                        <button
                            type="submit"
                            className="w-96 mt-4 bg-gray-800 text-white py-2 rounded hover:bg-gray-800"
                        >
                            Add Patient
                        </button>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Patient List</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className='bg-gray-100'>
                                <tr className='text-2xl'>
                                    <th className="py-2 px-4 border-b text-left text-gray-700 font-medium">ID</th>
                                    <th className="py-2 px-4 border-b text-left text-gray-700 font-medium">Name</th>
                                    <th className="py-2 px-4 border-b text-left text-gray-700 font-medium">Age</th>
                                    <th className="py-2 px-4 border-b text-left text-gray-700 font-medium">Gender</th>
                                    <th className="py-2 px-4 border-b text-left text-gray-700 font-medium">Weight</th>
                                    <th className="py-2 px-4 border-b text-left text-gray-700 font-medium">BP</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((patient) => (
                                    <tr key={patient.id} className='text-xl cursor-pointer' onClick={() => navigate(`/admin/patient/${patient.id}`)}>
                                        <td className="py-2 px-4 border-b text-gray-700">
                                            {patient.id}
                                        </td>
                                        <td className="py-2 px-4 border-b text-gray-700">
                                            {patient.name}
                                        </td>
                                        <td className="py-2 px-4 border-b text-gray-700">
                                            {patient.age}
                                        </td>
                                        <td className="py-2 px-4 border-b text-gray-700">
                                            {patient.gender}
                                        </td>
                                        <td className="py-2 px-4 border-b text-gray-700">
                                            {patient.weight}
                                        </td>
                                        <td className="py-2 px-4 border-b text-gray-700">
                                            {patient.bp}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;
