"use client";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 z-50">
      <div className="max-w-lg mx-auto flex items-center justify-between">
        {/* Hinge H logo */}
        <button className="text-black">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 4h2v7h10V4h2v16h-2v-7H7v7H5V4z" />
          </svg>
        </button>

        {/* Star/Standouts */}
        <button className="text-gray-400">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </button>

        {/* Likes with notification */}
        <button className="relative text-gray-400">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">
            1
          </span>
        </button>

        {/* Messages with notification */}
        <button className="relative text-gray-400">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">
            1
          </span>
        </button>

        {/* Profile picture */}
        <button className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-sm">
            👤
          </div>
        </button>
      </div>
    </div>
  );
}
