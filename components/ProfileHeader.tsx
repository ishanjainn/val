"use client";

interface ProfileHeaderProps {
  name: string;
  isNew?: boolean;
  pronouns?: string;
}

export default function ProfileHeader({ name, isNew = true, pronouns = "she/her/hers" }: ProfileHeaderProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="px-4 py-2">
      <div className="flex items-start justify-between">
        {/* Left side - Name and badges */}
        <div>
          <div className="flex items-center gap-2">
            {/* Large initial */}
            <span className="text-[32px] font-bold text-black leading-none">{initial}</span>
            
            {/* New here badge */}
            {isNew && (
              <span className="bg-[#7C3AED] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                New here
              </span>
            )}
          </div>
          
          {/* Pronouns */}
          {pronouns && (
            <p className="text-gray-400 text-sm mt-1">{pronouns}</p>
          )}
        </div>

        {/* Right side - Action icons */}
        <div className="flex items-center gap-5 mt-1">
          {/* Undo/back arrow - simple curved arrow */}
          <button className="text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </button>
          
          {/* More menu - horizontal dots */}
          <button className="text-black">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
