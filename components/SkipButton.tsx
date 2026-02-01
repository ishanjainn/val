"use client";

interface SkipButtonProps {
  onClick?: () => void;
}

export default function SkipButton({ onClick }: SkipButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed left-4 bottom-24 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-40 border border-gray-100"
    >
      <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}
