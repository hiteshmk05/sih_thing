import React, { useState } from 'react';
import SideNavbar from './sideNavbar';
import PatientInfoCard from './PatientInfo';
import PatientMetricsCard from './PatientMetrics';
import PatientHealthDetails from './PatientHealth';
import FancyButton from './FancyButton';

const initialPatientData = {
    PID: 1,
    Pname: 'John Doe',
    Gender: 'Male',
    Age: 45,
    Height: 1.6,
    Weight: 75,
    BMI: 33.6,
    Pregnancies: 0,
    BloodPressure: '120/80',
    Insulin: 0,
    Glucose: 148,
    FastingBloodSugar: 0,
    maxHeartRate: 162,
    Cholestrol: 244,
    Symptoms: 'Fever, nausea',
    Remarks: 'History of heart disease, sedentary lifestyle',
    image: 'user.png'
};

function PatientDashboard() {
    const [patientData, setPatientData] = useState(initialPatientData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Submitting patient data:', patientData);
    };

    return (
        <div className="flex">
            <SideNavbar />
            <div className="flex-1 w-full min-h-screen bg-gray-100 p-6 grid grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg p-6 col-span-1">
                    <div className="flex items-center justify-center mb-6">
                        <h2 className="text-xl font-semibold ml-4">{patientData.Pname}</h2>
                    </div>
                    <PatientInfoCard patient={patientData} handleInputChange={handleInputChange} />
                </div>
                <div className="bg-white shadow rounded-lg p-6 col-span-2">
                    <PatientMetricsCard patient={patientData} handleInputChange={handleInputChange} />
                </div>
                <div className="bg-white shadow rounded-lg p-6 col-span-3">
                    <PatientHealthDetails patient={patientData} handleInputChange={handleInputChange} />
                </div>
                <div className="col-span-3 flex justify-end">
                    <FancyButton onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
}

export default PatientDashboard;
