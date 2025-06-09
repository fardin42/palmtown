'use client';

import React, { useState, useEffect } from 'react';

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(${position.x}px, ${position.y}px)`,
        // Add your desired visual effects here
        // For example, a simple circle:
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        mixBlendMode: 'difference', // Example blend mode
        // filter: 'blur(10px)', // Example filter
      }}
    />
  );
};

export default CursorFollower;