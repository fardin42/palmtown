'use client'
import React, { useState, useEffect } from 'react';
import ThankYouMessage from './ThankYouMessage';

interface BrochureFormProps {
  onClose: () => void;
}

const BrochureForm: React.FC<BrochureFormProps> = ({ onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [requirement, setRequirement] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      fullName,
      email,
      phoneNumber,
      city,
      requirement,
      project: 'Palmtown',
    };

    try {
     const response = await fetch(process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL || 'https://hook.eu2.make.com/giv5lxep4f3ttkqmw716pj3wm4ocysb1', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setShowThankYou(true);
      } else {
        alert('Submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full relative transform transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-light"
        >
          &times;
        </button>
        {showThankYou ? (
          <ThankYouMessage onClose={handleClose} />
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
              Get Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 text-left text-black">
          <div>
            <label htmlFor="fullName" className="block text-gray-600 text-sm font-medium mb-2 uppercase tracking-wide">
              FULL NAME
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-600 text-sm font-medium mb-2 uppercase tracking-wide">
              PHONE NUMBER
            </label>
            <div className="flex">
              <input
                type="text"
                id="phoneNumber"
                className="w-full p-3 border border-gray-300 rounded-r-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="90000 00000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2 uppercase tracking-wide">
              EMAIL (optional)
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="requirement" className="block text-gray-600 text-sm font-medium mb-2 uppercase tracking-wide">
              REQUIREMENT
            </label>
            <select
              id="requirement"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              required
            >
              <option value="">Select your requirement</option>
              <option value="2 BHK Flats">2 BHK Flats</option>
              <option value="3 BHK Flats">3 BHK Flats</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="project" className="block text-gray-600 text-sm font-medium mb-2 uppercase tracking-wide">
                PROJECT
              </label>
              <input
                type="text"
                id="project"
                className="w-full p-3 border text-black border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                value="Palmtown"
                disabled
                readOnly
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-600 text-sm font-medium mb-2 uppercase tracking-wide">
                CITY
              </label>
              <input
                type="text"
                id="city"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Details
            </button>
          </div>
        </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BrochureForm;
