'use client';

import Section from '@/components/ui/Section';

import { APARTMENT_TYPES } from '@/constants';
import { colors } from '@/styles/colors';
import Image from 'next/image';
import { useState } from 'react';
import ImageModal from '../ui/ImageModal';


export default function Offerings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const openModal = (imageUrl: string) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageUrl('');
  };



  return (
    <Section
      id="offerings"
      title="Explore Your Home"
      subtitle="Choose from our collection of 2 & 3 bedroom apartments."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {APARTMENT_TYPES.map((apartment) => (
          <div key={apartment.type} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: colors.primaryBrown }}
            >
              {apartment.type === '2BHK' ? 'Spacious' : 'Luxurious'} {apartment.type} Apartments
            </h3>
            <div className="relative w-[80%] mx-auto mb-6 cursor-pointer" onClick={() => openModal(apartment.image)}>
              <Image src={apartment.image} width={500} height={300} className='' alt='Apartment Type' />
            </div>
            <p className="text-lg mb-4 text-slate-600">{apartment.description}</p>

            <ul className="list-disc list-inside text-left mt-4 max-w-md mx-auto text-black">
              {apartment.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ImageModal isOpen={isModalOpen} imageUrl={modalImageUrl} onClose={closeModal} />
    </Section>
  );
}