'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import Tab from '@/components/ui/Tab';
import { AMENITIES } from '@/constants';
import Image from 'next/image';

const categories = [
  { id: 'health', label: 'Health & Wellness', icon: '💪' },
  { id: 'recreation', label: 'Recreation & Social', icon: '🎉' },
  { id: 'leisure', label: 'Leisure & Relaxation', icon: '🧘' },
  { id: 'kids', label: 'Kids & Family', icon: '🧸' },
  { id: 'practical', label: 'Convenience & Security', icon: '🚗' },
];

export default function Amenities() {
  const [amenityDescriptions] = useState<Record<string, string>>({});

  const tabs = categories.map(category => {
    const categoryAmenities = AMENITIES.filter(amenity => amenity.category === category.id);

    return {
      id: `amenities-${category.id}`,
      label: `${category.icon} ${category.label}`,
      content: (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryAmenities.map((amenity, index) => (
            <div key={index} className="bg-white text-black p-4 rounded-lg shadow">
              <div className="flex flex-col gap-4 justify-start items-start aspect-[4/4]">
                  {/* image should be here */}
               <div className="relative" >
                 <Image src={amenity.image} alt={amenity.name} width={500} height={500} quality={100} priority className="object-cover" />
                
               </div>
               <h3 className='text-4xl  bottom-0 shadow-inner'>{amenity.name}</h3>
                
              </div>
              {amenityDescriptions[amenity.name] && (
                <div className="mt-2 p-2 bg-gray-50 rounded-md text-sm">
                  {amenityDescriptions[amenity.name]}
                
                </div>
              )}
            </div>
          ))}
        </div>
      ),
    };
  });

  return (
    <Section
      id="amenities"
      title="Lifestyle & Amenities"
      subtitle="Everything that matters to you, from health & fitness to fun & frolic to convenience & security."
    >
      <Tab tabs={tabs} />
    </Section>
  );
}