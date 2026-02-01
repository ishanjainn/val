"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Auto-complete loading after 2.5 seconds
    const timer = setTimeout(onLoadingComplete, 2500);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

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
