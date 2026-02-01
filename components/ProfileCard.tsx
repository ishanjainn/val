"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProfileCardProps {
  photos: string[];
  name: string;
  promptLabel?: string;
  promptAnswer?: string;
}

export default function ProfileCard({ photos, name, promptLabel, promptAnswer }: ProfileCardProps) {
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
    <div className="w-full">
      {/* Photo Card */}
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
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
                <span className="text-8xl">💜</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Photo Progress Bars - Hinge style */}
        {photos.length > 1 && (
          <div className="absolute top-2 left-2 right-2 flex gap-1">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`h-[3px] flex-1 rounded-full transition-all ${
                  index === currentPhotoIndex
                    ? "bg-white"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Tap Zones for Photo Navigation */}
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
      </div>

      {/* Prompt Card - appears below photo like Hinge */}
      {promptLabel && promptAnswer && (
        <div className="mt-3 bg-white rounded-xl p-4 shadow-sm">
          <p className="text-gray-500 text-sm mb-1">{promptLabel}</p>
          <p className="text-black text-lg font-semibold leading-snug">{promptAnswer}</p>
        </div>
      )}
    </div>
  );
}
