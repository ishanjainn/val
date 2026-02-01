"use client";

interface MatchedHeaderProps {
  name: string;
  hasRose?: boolean;
}

export default function MatchedHeader({ name, hasRose = false }: MatchedHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white">
      {/* Left side - Back arrow and name */}
      <div className="flex items-center gap-3">
        {/* Back arrow */}
        <button className="text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Name */}
        <div className="flex items-center gap-1.5">
          <span className="text-black font-bold text-lg">{name}</span>
          {hasRose && (
            <svg className="w-5 h-5 text-[#7C3AED]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.5 2.5 1.5 3.5-2 1-3.5 3-3.5 5.5 0 3.5 3 6.5 6.5 6.5s6.5-3 6.5-6.5c0-2.5-1.5-4.5-3.5-5.5 1-1 1.5-2 1.5-3.5C16.5 4 14.5 2 12 2z"/>
            </svg>
          )}
        </div>
      </div>

      {/* Right side - More menu */}
      <button className="text-black">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>
    </div>
  );
}
