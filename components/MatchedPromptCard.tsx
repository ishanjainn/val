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
      )}
    </div>
  );
}
