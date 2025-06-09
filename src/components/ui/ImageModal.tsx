'use client';

import React from 'react';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imageUrl, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close modal when clicking outside the image
    >
      <div
        className="relative bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <button
          className="absolute top-2 right-2 text-gray-800 hover:text-gray-600 text-3xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Modal Image"
            layout="intrinsic"
            width={800}
            height={600}
            objectFit="contain"
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  );
}