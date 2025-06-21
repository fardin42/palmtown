import React from 'react';

interface ThankYouMessageProps {
  onClose: () => void;
}

const ThankYouMessage: React.FC<ThankYouMessageProps> = ({ onClose }) => {
  const handleDownload = () => {
    // Replace with your actual brochure download link
    const brochureLink = '/assets/Palmtown_Brochure.pdf'; 
    window.open(brochureLink, '_blank');
    onClose();
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Thank You!</h2>
      <p className="text-gray-600 mb-6">
        Your interest is greatly appreciated. We will send the brochure to your email shortly.
      </p>
      <button
        onClick={handleDownload}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
      >
        Download Brochure
      </button>
      <button
        onClick={onClose}
        className="mt-4 w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
      >
        Close
      </button>
    </div>
  );
};

export default ThankYouMessage;