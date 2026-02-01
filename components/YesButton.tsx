"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function YesButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/chat");
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-12 py-4 bg-[#6B4EAA] text-white rounded-full font-bold text-xl
                 shadow-lg pulse-gentle hover:bg-[#5A3E99] transition-colors"
    >
      Yes! 💜
    </motion.button>
  );
}
