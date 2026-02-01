"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface MatchedPhotoCardProps {
  photos: string[];
  name: string;
}

export default function MatchedPhotoCard({ photos, name }: MatchedPhotoCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    if (photos.length > 1) {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (photos.length > 1) {
      setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div className="relative mx-4 mt-2">
      {/* Photo container */}
      <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhotoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            {photos.length > 0 ? (
              <Image
                src={photos[currentPhotoIndex]}
                alt={`${name} photo ${currentPhotoIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-200">
                <span className="text-8xl">💜</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Photo Progress Bars */}
        {photos.length > 1 && (
          <div className="absolute top-2 left-2 right-2 flex gap-1">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`h-[3px] flex-1 rounded-full transition-all ${
                  index === currentPhotoIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Tap Zones */}
        {photos.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              className="absolute left-0 top-0 bottom-0 w-1/3 focus:outline-none"
              aria-label="Previous photo"
            />
            <button
              onClick={nextPhoto}
              className="absolute right-0 top-0 bottom-0 w-1/3 focus:outline-none"
              aria-label="Next photo"
            />
          </>
        )}

        {/* Heart icon in bottom right */}
        <button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path 
              d="M4.5 12.5C2.5 10.5 2.5 7 5 5s6 0 7 2c1-2 4.5-4 7-2s2.5 5.5 0.5 7.5L12 20l-7.5-7.5z" 
              stroke="#B8A088" 
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
