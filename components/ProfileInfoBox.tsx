"use client";

interface ProfileInfoBoxProps {
  age?: number;
  gender?: string;
  sexuality?: string;
  height?: string;
  work?: string;
  school?: string;
  hometown?: string;
  drinking?: string;
  ethnicity?: string;
  datingGoals?: string;
  relationshipType?: string;
  religion?: string;
}

// Simple house icon
const HouseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 9.5V19a1 1 0 001 1h12a1 1 0 001-1V9.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 6V4h-2v1" />
  </svg>
);

// Building with columns (drinking/moderate)
const BuildingIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M6 20V10M10 20V10M14 20V10M18 20V10M5 10h14l-7-6-7 6z" />
  </svg>
);

// Circle with point (ethnicity)
const EthnicityIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="10" r="7" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v4" />
  </svg>
);

// Magnifying glass (dating goals)
const SearchIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="11" cy="11" r="6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 15.5L20 20" />
  </svg>
);

// Two people (relationship type)
const TwoPeopleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="7" r="2.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 20c0-2.5 1.5-4.5 4-4.5s4 2 4 4.5" />
  </svg>
);

// Briefcase (work)
const BriefcaseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
  </svg>
);

// Graduation cap (school)
const SchoolIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 9l10 6 10-6-10-6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 9v6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 11v5.5c0 1.5 2.5 3 6 3s6-1.5 6-3V11" />
  </svg>
);

// Sparkle (religion)
const SparkleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.5-7.5l-3 3m-9 9l-3 3m15 0l-3-3m-9-9l-3-3" />
  </svg>
);

// Cake (age)
const CakeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4V2m0 2a2 2 0 012 2v1H10V6a2 2 0 012-2z" />
    <rect x="4" y="9" width="16" height="11" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h16" />
  </svg>
);

// Person (gender)
const PersonIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="7" r="4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a6.5 6.5 0 0113 0" />
  </svg>
);

// Heart rings (sexuality)
const HeartIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

// Height icon
const HeightIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0-16l-3 3m3-3l3 3m-3 16l-3-3m3 3l3-3" />
  </svg>
);

export default function ProfileInfoBox({
  age = 28,
  gender = "Woman",
  sexuality = "Straight",
  height = "5'3\"",
  work = "KPMG",
  school,
  hometown,
  drinking,
  ethnicity,
  datingGoals = "Long-term relationship",
  relationshipType,
  religion = "Hindu",
}: ProfileInfoBoxProps) {
  return (
    <div className="bg-white mx-4 rounded-2xl overflow-hidden mt-3 shadow-sm">
      {/* Top row - horizontal scrollable stats (hidden scrollbar) */}
      <div className="flex items-center px-4 py-4 overflow-x-auto border-b border-gray-100 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Age */}
        <div className="flex items-center gap-2 flex-shrink-0 text-gray-800">
          <CakeIcon />
          <span className="text-[15px] font-semibold">{age}</span>
        </div>

        <div className="w-px h-5 bg-gray-200 mx-3 flex-shrink-0" />

        {/* Gender */}
        <div className="flex items-center gap-2 flex-shrink-0 text-gray-800">
          <PersonIcon />
          <span className="text-[15px] font-semibold">{gender}</span>
        </div>

        <div className="w-px h-5 bg-gray-200 mx-3 flex-shrink-0" />

        {/* Sexuality */}
        <div className="flex items-center gap-2 flex-shrink-0 text-gray-800">
          <HeartIcon />
          <span className="text-[15px] font-semibold">{sexuality}</span>
        </div>

        {height && (
          <>
            <div className="w-px h-5 bg-gray-200 mx-3 flex-shrink-0" />
            <div className="flex items-center gap-2 flex-shrink-0 text-gray-800">
              <HeightIcon />
              <span className="text-[15px] font-semibold">{height}</span>
            </div>
          </>
        )}
      </div>

      {/* Detail rows */}
      {work && (
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 text-gray-800">
          <BriefcaseIcon />
          <span className="text-[15px] font-semibold">{work}</span>
        </div>
      )}

      {school && (
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 text-gray-800">
          <SchoolIcon />
          <span className="text-[15px] font-semibold">{school}</span>
        </div>
      )}

      {hometown && (
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 text-gray-800">
          <HouseIcon />
          <span className="text-[15px] font-semibold">{hometown}</span>
        </div>
      )}

      {drinking && (
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 text-gray-800">
          <BuildingIcon />
          <span className="text-[15px] font-semibold">{drinking}</span>
        </div>
      )}

      {ethnicity && (
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 text-gray-800">
          <EthnicityIcon />
          <span className="text-[15px] font-semibold">{ethnicity}</span>
        </div>
      )}

      {datingGoals && (
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 text-gray-800">
          <SearchIcon />
          <span className="text-[15px] font-semibold">{datingGoals}</span>
        </div>
      )}

      {relationshipType && (
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-100 text-gray-800">
          <TwoPeopleIcon />
          <span className="text-[15px] font-semibold">{relationshipType}</span>
        </div>
      )}

      {religion && (
        <div className="flex items-center gap-4 px-4 py-4 text-gray-800">
          <SparkleIcon />
          <span className="text-[15px] font-semibold">{religion}</span>
        </div>
      )}
    </div>
  );
}
