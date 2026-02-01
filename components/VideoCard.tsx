"use client";

interface VideoCardProps {
  src: string;
  poster?: string;
}

export default function VideoCard({ src, poster }: VideoCardProps) {
  return (
    <div className="relative mx-4 mt-3">
      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-100">
        <video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Heart icon in bottom right */}
        <button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
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
      </div>
    </div>
  );
}
