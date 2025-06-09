'use client';

import { useState } from 'react';
import { colors } from '@/styles/colors';

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="rounded-md overflow-hidden">
          <button
            className="w-full p-4 text-left text-white flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
            style={{ backgroundColor: colors.secondaryBrown }}
          >
            <span className="font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
          >
            <div 
              className="p-4 border border-t-0 rounded-b-md"
              style={{ borderColor: colors.secondaryBrown }}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}