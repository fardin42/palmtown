'use client'
import { colors } from "@/styles/colors";
import { useState } from "react";
import BrochureForm from "../common/BrochureForm";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
<>
<section className="relative hero h-screen flex items-center justify-center text-center text-white overflow-hidden" >
      <div className="absolute inset-0 bg-[#0000007c] " />
      <div className="text-center relative z-10 p-10 rounded-lg max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Experience Palm-Ness!
        </h1>
        <p className="text-xl md:text-2xl mb-2 animate-fade-in-delay-1">
          2 & 3 Bedroom Spacious Homes at Upper Mahatma Nagar
        </p>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-delay-2">
          Peace, Prosperity, Comfort
        </p>
        
          <button
            className='inline-block bg-accent-green hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 animate-fade-in-delay-3'
            style={{ backgroundColor: colors.accentGreen }}
            onClick={handleDownloadClick}
          >
            Get Details
          </button>
        </div>
      {isFormOpen && <BrochureForm onClose={handleCloseForm} />}
    </section>
</>
  );
};

export default Hero;