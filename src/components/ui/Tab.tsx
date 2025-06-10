'use client';

import { useState } from 'react';
import { colors } from '@/styles/colors';

interface TabProps {
  tabs: {
    id: string;
    label: string;
    icon?: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export default function Tab({ tabs, className = '' }: TabProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={className}>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md transition-colors cursor-pointer border ${activeTab === tab.id ? 'text-white' : ''}`}
            style={{
              backgroundColor: activeTab === tab.id ? colors.accentGreen : 'transparent',
              borderColor: colors.accentGreen,
              color: activeTab === tab.id ? 'white' : colors.accentGreen,
            }}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`transition-opacity duration-300 ${activeTab === tab.id ? 'block' : 'hidden'}`}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}