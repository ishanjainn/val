"use client";

import { motion } from "framer-motion";

interface TypingIndicatorProps {
  isUser?: boolean;
}

export default function TypingIndicator({ isUser = false }: TypingIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      <div
        className={`px-4 py-3 rounded-2xl flex gap-1 ${
          isUser
            ? "bg-[#6B4EAA]/20 rounded-br-md"
            : "bg-gray-200 rounded-bl-md"
        }`}
      >
        <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
        <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
        <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full" />
      </div>
    </motion.div>
  );
}
