"use client";

interface ChatProfileTabsProps {
  activeTab: "chat" | "profile";
  onTabChange?: (tab: "chat" | "profile") => void;
}

export default function ChatProfileTabs({ activeTab, onTabChange }: ChatProfileTabsProps) {
  return (
    <div className="flex bg-white border-b border-gray-100">
      <button
        onClick={() => onTabChange?.("chat")}
        className={`flex-1 py-3 text-center text-[15px] font-semibold ${
          activeTab === "chat"
            ? "text-black border-b-2 border-black"
            : "text-gray-400"
        }`}
      >
        Chat
      </button>
      
      {/* Diagonal divider */}
      <div className="flex items-center px-2">
        <div className="w-px h-4 bg-gray-300 transform rotate-12"></div>
      </div>
      
      <button
        onClick={() => onTabChange?.("profile")}
        className={`flex-1 py-3 text-center text-[15px] font-semibold ${
          activeTab === "profile"
            ? "text-black border-b-2 border-black"
            : "text-gray-400"
        }`}
      >
        Profile
      </button>
    </div>
  );
}
