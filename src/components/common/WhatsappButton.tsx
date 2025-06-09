import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
// import Image from 'next/image';

const WhatsappButton: React.FC = () => {
  const phoneNumber = '+917353822922'; // Replace with your WhatsApp number
  const message = 'Hello! I am interested in Palmtown. Could you please provide more details?';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 w-16 h-16"
      aria-label="Chat on WhatsApp"
    >
 <div className='w-full h-full pb-0.5 pl-0.5'>
 <FaWhatsapp className='w-full h-auto' />
 </div>
    </a>
  );
};

export default WhatsappButton;