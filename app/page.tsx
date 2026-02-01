"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MatchedHeader from "@/components/MatchedHeader";
import ChatProfileTabs from "@/components/ChatProfileTabs";
import MatchedPhotoCard from "@/components/MatchedPhotoCard";
import ProfileInfoBox from "@/components/ProfileInfoBox";
import MatchedPromptCard from "@/components/MatchedPromptCard";
import VideoCard from "@/components/VideoCard";
import MessageInput from "@/components/MessageInput";
import ChatView from "@/components/ChatView";
import LoadingScreen from "@/components/LoadingScreen";

// Dubby's photos
const photo1 = ["/photos/photo1.png"]; // Flowers
const photo2 = ["/photos/photo2.png"]; // Restaurant cave
const photo3 = ["/photos/photo3.png"]; // Night event
const photo4 = ["/photos/photo4.png"]; // Glasses restaurant
const photo5 = ["/photos/photo5.png"]; // Standing green background

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"chat" | "profile">("profile");

  return (
    <main className="min-h-screen bg-[#FAFAFA] pb-24 flex flex-col">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      {/* Header with name and back button */}
      <MatchedHeader name="Dubby" hasRose={false} />

      {/* Chat / Profile tabs */}
      <ChatProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content based on active tab */}
      {activeTab === "profile" ? (
        /* Profile Content */
        <div className="pb-8">
          {/* Photo 1 - Flowers */}
          <MatchedPhotoCard photos={photo1} name="Dubby" />

          {/* Profile Info Box */}
          <ProfileInfoBox
            age={27}
            gender="Woman"
            sexuality="Straight"
            height="5'3&quot;"
            work="KPMG"
            religion="Hindu"
            datingGoals="Long-term relationship"
          />

          {/* Photo 2 - Restaurant */}
          <MatchedPhotoCard photos={photo2} name="Dubby" />

          {/* Prompt 1 */}
          <MatchedPromptCard
            label="What if I tell you"
            answer="Im already in a toxic relationship with my manager"
          />

          {/* Photo 3 - Night event */}
          <MatchedPhotoCard photos={photo3} name="Dubby" />

          {/* Prompt 2 */}
          <MatchedPromptCard
            label="I am a regular at"
            answer="Taking naps"
          />

          {/* Photo 4 - Glasses */}
          <MatchedPhotoCard photos={photo4} name="Dubby" />

          {/* Prompt 3 */}
          <MatchedPromptCard
            label="We're the same type of weird if"
            answer="If you like veg biryani"
          />

          {/* Video - loops automatically */}
          <VideoCard src="/videos/video.mp4" />

          {/* Photo 5 - Standing */}
          <MatchedPhotoCard photos={photo5} name="Dubby" />

        </div>
      ) : (
        /* Chat View */
        <ChatView isActive={activeTab === "chat"} />
      )}

      {/* Message Input - only show on profile tab */}
      {activeTab === "profile" && (
        <MessageInput placeholder="Send a message" />
      )}
    </main>
  );
}
