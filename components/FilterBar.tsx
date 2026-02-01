"use client";

export default function FilterBar() {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      {/* Filter/Settings icon - 2x2 grid of dots */}
      <button className="flex-shrink-0">
        <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="5" cy="5" r="2" />
          <circle cx="15" cy="5" r="2" />
          <circle cx="5" cy="15" r="2" />
          <circle cx="15" cy="15" r="2" />
        </svg>
      </button>

      {/* Age filter - filled/active */}
      <button className="flex-shrink-0 flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-full text-[13px] font-medium">
        Age
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Height filter - outlined */}
      <button className="flex-shrink-0 flex items-center gap-1.5 bg-white text-black px-3 py-1.5 rounded-full text-[13px] font-medium border border-gray-300">
        Height
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dating Intentions filter - outlined */}
      <button className="flex-shrink-0 flex items-center gap-1.5 bg-white text-black px-3 py-1.5 rounded-full text-[13px] font-medium border border-gray-300">
        Dating Intentions
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
