"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function EscapeButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [tapCount, setTapCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get safe boundaries for the button within the container
  const getSafeBounds = useCallback(() => {
    if (!containerRef.current || !buttonRef.current) {
      return { minX: -80, maxX: 80, minY: -20, maxY: 20 };
    }
    
    const container = containerRef.current.getBoundingClientRect();
    const button = buttonRef.current.getBoundingClientRect();
    const buttonWidth = button.width * scale;
    const buttonHeight = button.height * scale;
    
    // Keep button within container bounds with padding
    const padding = 10;
    return {
      minX: -(container.width / 2) + (buttonWidth / 2) + padding,
      maxX: (container.width / 2) - (buttonWidth / 2) - padding,
      minY: -(container.height / 2) + (buttonHeight / 2) + padding,
      maxY: (container.height / 2) - (buttonHeight / 2) - padding,
    };
  }, [scale]);

  // Move to a random position within bounds
  const moveToRandom = useCallback(() => {
    const bounds = getSafeBounds();
    const newX = Math.random() * (bounds.maxX - bounds.minX) + bounds.minX;
    const newY = Math.random() * (bounds.maxY - bounds.minY) + bounds.minY;
    setPosition({ x: newX, y: newY });
  }, [getSafeBounds]);

  // Desktop: Mouse tracking to escape
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || !containerRef.current) return;

      const button = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = button.left + button.width / 2;
      const buttonCenterY = button.top + button.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2)
      );

      const dangerZone = 80;
      if (distance < dangerZone) {
        // Calculate escape direction (away from mouse)
        const angle = Math.atan2(buttonCenterY - e.clientY, buttonCenterX - e.clientX);
        const escapeDistance = (dangerZone - distance) * 2;
        
        const bounds = getSafeBounds();
        let newX = position.x + Math.cos(angle) * escapeDistance;
        let newY = position.y + Math.sin(angle) * escapeDistance;

        // Bounce off boundaries - stay within container
        newX = Math.max(bounds.minX, Math.min(bounds.maxX, newX));
        newY = Math.max(bounds.minY, Math.min(bounds.maxY, newY));

        setPosition({ x: newX, y: newY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, position, getSafeBounds]);

  // Mobile: Handle tap
  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isMobile) {
      setTapCount((prev) => prev + 1);
      // Shrink by 10% each tap, minimum 0.4 scale
      setScale((prev) => Math.max(0.4, prev - 0.08));
      moveToRandom();
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-24 flex items-center justify-center overflow-hidden"
    >
      <motion.button
        ref={buttonRef}
        onClick={handleTap}
        onTouchStart={handleTap}
        animate={{
          x: position.x,
          y: position.y,
          scale: scale,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="absolute px-6 py-2 bg-gray-100 text-gray-500 rounded-full font-medium text-sm
                   hover:bg-gray-200 transition-colors shadow-sm select-none touch-none"
        style={{ touchAction: "none" }}
      >
        No
      </motion.button>
    </div>
  );
}
