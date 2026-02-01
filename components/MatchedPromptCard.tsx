"use client";

interface MatchedPromptCardProps {
  label: string;
  answer: string;
  showHeart?: boolean;
}

export default function MatchedPromptCard({ label, answer, showHeart = true }: MatchedPromptCardProps) {
  return (
    <div className="bg-white mx-4 rounded-2xl px-5 py-6 mt-3 shadow-sm relative">
      <p className="text-black text-[14px] font-semibold mb-2">{label}</p>
      <p className="text-black text-[24px] font-bold leading-snug pb-6">{answer}</p>
      
      {/* Heart icon in bottom right - inside a circular background */}
      {showHeart && (
        <button className="absolute bottom-5 right-5 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-[#8B7355]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      )}
    </div>
  );
}
