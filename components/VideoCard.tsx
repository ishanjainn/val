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
      </div>
    </div>
  );
}
