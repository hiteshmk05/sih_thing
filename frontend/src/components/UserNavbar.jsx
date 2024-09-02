import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

const SideNavbar = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const patient = {
    name: 'John Doe',
    image: '/user.png',
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-between w-[20vw] bg-gray-800 text-white p-4">
      <div className="flex items-center mt-5 gap-4">
        <img
          src="/logo.jpeg"
          alt="zkHealthCare"
          className="w-[5vw] rounded-full"
        />
        <h1 className='text-xl'>ZK HEALTHCARE</h1>
      </div>
      <br />
      <nav className="flex flex-col mt-16 space-y-4">
        <Link
          to={`/user/dashboard/${userId}`}
          className="text-lg hover:bg-gray-700 p-2 rounded"
        >
          Basic Info
        </Link>
        <Link
          to={`/user/analytics/${userId}`}
          className="text-lg hover:bg-gray-700 p-2 rounded"
        >
          Analytics
        </Link>
        <Link
          to={`/user/report/${userId}`}
          className="text-lg hover:bg-gray-700 p-2 rounded"
        >
          Report
        </Link>
      </nav>

      <div className="mt-auto mb-10">
        <button
          onClick={handleLogout} // Add onClick handler to call handleLogout
          className="w-full bg-red-600 hover:bg-red-700 text-lg py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;
