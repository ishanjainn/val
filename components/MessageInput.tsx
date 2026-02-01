"use client";

interface MessageInputProps {
  placeholder?: string;
  onSend?: (message: string) => void;
}

export default function MessageInput({ placeholder = "Send a message", onSend }: MessageInputProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white px-4 py-3 border-t border-gray-100">
      <div className="max-w-lg mx-auto flex items-center gap-3">
        {/* Text input */}
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-3">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full bg-transparent text-gray-800 text-sm outline-none placeholder-gray-400"
          />
        </div>

        {/* Voice message button - waveform icon */}
        <button className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <rect x="4" y="10" width="2" height="4" rx="1" />
            <rect x="8" y="7" width="2" height="10" rx="1" />
            <rect x="12" y="4" width="2" height="16" rx="1" />
            <rect x="16" y="7" width="2" height="10" rx="1" />
            <rect x="20" y="10" width="2" height="4" rx="1" />
          </svg>
        </button>
      </div>
    </div>
  );
}
