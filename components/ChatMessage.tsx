"use client";

import { motion } from "framer-motion";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  delay?: number;
}

export default function ChatMessage({ message, isUser, delay = 0 }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay,
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
          isUser
            ? "bg-[#6B4EAA] text-white rounded-br-md"
            : "bg-gray-200 text-gray-800 rounded-bl-md"
        }`}
      >
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
    </motion.div>
  );
}
