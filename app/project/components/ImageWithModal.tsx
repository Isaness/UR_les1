'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageWithModalProps {
  src: string;
  alt: string;
  title: string;
  subtitles: string[];       // Array of subtitle strings
  descriptions: string[];    // Array of paragraph strings
  itemCount: number;         // Number of pairs to show
}

export default function ImageWithModal({ 
  src, 
  alt, 
  title, 
  subtitles, 
  descriptions, 
  itemCount 
}: ImageWithModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // We slice the arrays based on the itemCount provided
  const visibleSubtitles = subtitles.slice(0, itemCount);

  return (
    <>
      {/* 1. Thumbnail Trigger */}
      <div 
        className="relative w-64 h-64 cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {/* 2. Popup Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          {/* 3. Modal Content Card */}
          <div 
            className="relative flex flex-col md:flex-row bg-white dark:bg-gray-900 max-w-4xl w-full rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-64 md:h-[550px]">
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>

            {/* Text Section */}
            <div className="p-8 md:w-1/2 flex flex-col max-h-[550px]"> 
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white text-xl z-20"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              
              <h2 className="text-3xl font-bold mb-6 flex-shrink-0 border-b pb-2">{title}</h2>
              
              {/* Scrollable Container */}
              <div className="overflow-y-auto pr-4 custom-scrollbar space-y-6">
                {visibleSubtitles.map((sub, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-semibold text-black-600 dark:text-blue-400">
                      {sub}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {descriptions[index] || "No description provided for this section."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}