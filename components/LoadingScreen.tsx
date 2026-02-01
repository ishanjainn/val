"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

// All images to preload
const imagesToPreload = [
  "/photos/photo1.png",
  "/photos/photo2.png",
  "/photos/photo3.png",
  "/photos/photo4.png",
  "/photos/photo5.png",
];

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Preload all images
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount >= totalImages) {
        setImagesLoaded(true);
      }
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // Count errors as loaded to prevent blocking
      img.src = src;
    });

    // Preload video
    const video = document.createElement("video");
    video.preload = "auto";
    video.src = "/videos/video.mp4";

    // Minimum loading time of 2.5 seconds for the animation
    const timer = setTimeout(() => setMinTimeElapsed(true), 2500);

    return () => clearTimeout(timer);
  }, []);

  // Complete loading when both conditions are met
  useEffect(() => {
    if (imagesLoaded && minTimeElapsed) {
      onLoadingComplete();
    }
  }, [imagesLoaded, minTimeElapsed, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://assets-v2.lottiefiles.com/a/e22ec940-1166-11ee-ad97-9f9ac83f3a1f/e68nGvQ0Wz.gif"
          alt="Loading..."
          className="w-40 h-40"
        />
      </motion.div>
    </motion.div>
  );
}
