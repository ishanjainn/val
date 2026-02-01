"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PhotoCardProps {
  photos: string[];
  name: string;
  onLike?: () => void;
}

export default function PhotoCard({ photos, name, onLike }: PhotoCardProps) {
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
    <div className="relative mx-4">
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

        {/* Heart/Like button - bottom right */}
        <button
          onClick={onLike}
          className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
