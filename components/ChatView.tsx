"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ChatViewProps {
  isActive: boolean;
}

interface Message {
  id: number;
  text: string;
  isMe: boolean;
  isPhoto?: boolean;
}

const phase1Messages: Message[] = [
  { id: 0, text: "You know whats wild?", isMe: true, isPhoto: true },
  { id: 1, text: "You got me curious now", isMe: false },
  { id: 2, text: "Just got a weird deja vu energy from this picture", isMe: true },
  { id: 3, text: "hahah like what?", isMe: false },
  { id: 4, text: "We definitely dated in parallel universe", isMe: true },
  { id: 5, text: "oh yeaa", isMe: false },
  { id: 6, text: "Did I kill you then?", isMe: false },
  { id: 7, text: "I swear", isMe: true },
  { id: 8, text: "I believe you", isMe: false },
  { id: 9, text: "You were this quiet artist and I was the guy stealing your hot chocolate", isMe: true },
  { id: 10, text: "Total rom-com energy", isMe: true },
  { id: 11, text: "okay why artist?", isMe: false },
];

const phase2Message: Message = { id: 12, text: "I only swiped on you cause you like veg biryani 😋", isMe: false };
const phase3Message: Message = { id: 13, text: "Will you be my Valentine, Dubby? ❤️", isMe: true };

export default function ChatView({ isActive }: ChatViewProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingId, setCurrentTypingId] = useState<number | null>(null);
  const [phase, setPhase] = useState<"chat1" | "timeline1" | "chat2" | "timeline2" | "question" | "typing" | "done">("chat1");
  const [typedText, setTypedText] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);

  // Reset when tab becomes active - reveal messages with 2.5s delay
  useEffect(() => {
    if (isActive) {
      setVisibleMessages([]);
      setIsTyping(false);
      setCurrentTypingId(null);
      setPhase("chat1");
      setTypedText("");
      setShowKeyboard(true);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
      
      const timers: NodeJS.Timeout[] = [];
      
      // Reveal messages with 2.5 second intervals
      phase1Messages.forEach((msg, index) => {
        const typingTimer = setTimeout(() => {
          setIsTyping(true);
          setCurrentTypingId(msg.id);
        }, index * 2500 + 500);
        timers.push(typingTimer);
        
        const messageTimer = setTimeout(() => {
          setIsTyping(false);
          setCurrentTypingId(null);
          setVisibleMessages(prev => [...prev, msg.id]);
        }, index * 2500 + 1800);
        timers.push(messageTimer);
      });

      // After all phase1 messages, move to timeline1
      const phaseTimer = setTimeout(() => {
        setPhase("timeline1");
      }, phase1Messages.length * 2500 + 2000);
      timers.push(phaseTimer);

      return () => timers.forEach(t => clearTimeout(t));
    }
  }, [isActive]);

  // Trigger timeline 1
  const triggerTimeline1 = () => {
    if (phase !== "timeline1") return;
    setPhase("chat2");
    setIsTyping(true);
    setCurrentTypingId(12);
    
setTimeout(() => {
        setIsTyping(false);
        setCurrentTypingId(null);
        setVisibleMessages(prev => [...prev, 12]);
        
        // Wait longer before showing timeline 2
        setTimeout(() => {
          setPhase("timeline2");
        }, 3500);
      }, 1500);
  };
  
  // Trigger timeline 2
  const triggerTimeline2 = () => {
    if (phase !== "timeline2") return;
    setPhase("question");
    setIsTyping(true);
    setCurrentTypingId(13);
    
    setTimeout(() => {
      setIsTyping(false);
      setCurrentTypingId(null);
      setVisibleMessages(prev => [...prev, 13]);
      setPhase("typing");
    }, 1500);
  };

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (phase === "timeline1" || phase === "timeline2") return;
    
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleMessages, isTyping, phase]);

  // Handle scroll - keyboard visibility for typing phase
  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const currentScrollTop = scrollRef.current.scrollTop;
    const scrollHeight = scrollRef.current.scrollHeight;
    const clientHeight = scrollRef.current.clientHeight;
    const maxScroll = scrollHeight - clientHeight;
    const distanceFromBottom = maxScroll - currentScrollTop;
    
    // Keyboard visibility for typing phase
    if (phase === "typing" || phase === "done") {
      if (currentScrollTop < lastScrollTop.current || distanceFromBottom > 50) {
        setShowKeyboard(false);
      }
      if (distanceFromBottom < 20) {
        setShowKeyboard(true);
      }
    }
    
    lastScrollTop.current = currentScrollTop;
  };
  
  // Check keyboard visibility when phase changes to typing
  useEffect(() => {
    if (phase === "typing") {
      setShowKeyboard(true);
      if (scrollRef.current) {
        lastScrollTop.current = scrollRef.current.scrollTop;
      }
    }
  }, [phase]);

  // Handle keyboard input
  const handleKeyPress = (key: string) => {
    if (phase !== "typing") return;
    
    const expectedSequence = "YES";
    const nextExpected = expectedSequence[typedText.length];
    
    if (key === nextExpected) {
      const newText = typedText + key;
      setTypedText(newText);
      
      if (newText === "YES") {
        setPhase("done");
      }
    } else {
      setTypedText("");
    }
  };

  const renderPhotoMessage = (msg: Message) => (
    <motion.div
      key={msg.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="relative ml-auto mr-0 w-[200px]">
        <div className="w-full aspect-square rounded-xl overflow-hidden">
          <Image src="/photos/photo1.png" alt="Dubby" width={200} height={200} className="w-full h-full object-cover" />
        </div>
        {/* Comment bubble - positioned bottom right, half inside half outside */}
        <div className="absolute -bottom-4 right-0 left-8">
          <div className="bg-[#FFF8E7] rounded-xl px-3 py-2 shadow-sm">
            <p className="text-[14px] text-gray-800 text-right">{msg.text}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderMessage = (msg: Message, showAvatar: boolean = true) => {
    if (msg.isPhoto) return renderPhotoMessage(msg);
    
    if (msg.isMe) {
      return (
        <motion.div key={msg.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="w-full flex justify-end">
          <div className="px-4 py-2.5 rounded-2xl max-w-[75%] bg-[#6B4C7A] text-white">
            <p className="text-[15px]">{msg.text}</p>
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div key={msg.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex items-end gap-2 justify-start">
        {showAvatar ? (
          <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/photos/photo1.png" alt="Dubby" width={28} height={28} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-7 flex-shrink-0" /> 
        )}
        <div className="px-4 py-2.5 rounded-2xl max-w-[75%] bg-gray-100 text-gray-800">
          <p className="text-[15px]">{msg.text}</p>
        </div>
      </motion.div>
    );
  };

  const renderTypingIndicator = (isMe: boolean) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`flex items-end gap-2 ${isMe ? "justify-end" : "justify-start"}`}
    >
      {!isMe && (
        <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
          <Image src="/photos/photo1.png" alt="Dubby" width={28} height={28} className="w-full h-full object-cover" />
        </div>
      )}
      <div className={`px-4 py-3 rounded-2xl ${isMe ? "bg-[#6B4C7A]" : "bg-gray-100"}`}>
        <div className="flex gap-1">
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className={`w-2 h-2 rounded-full ${isMe ? "bg-white/60" : "bg-gray-400"}`} />
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className={`w-2 h-2 rounded-full ${isMe ? "bg-white/60" : "bg-gray-400"}`} />
          <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className={`w-2 h-2 rounded-full ${isMe ? "bg-white/60" : "bg-gray-400"}`} />
        </div>
      </div>
    </motion.div>
  );

  // Timeline section component with animated scrolling bubbles
  const TimelineSection = ({ text, subtext, onClick, isClickable, fast }: { text: string; subtext?: string; onClick?: () => void; isClickable: boolean; fast?: boolean }) => (
    <div className="h-[70vh] flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Animated scrolling chat bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left side bubbles (gray) scrolling up */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`left-${i}`}
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            transition={{ 
              duration: fast ? 1.5 : 2.5, 
              delay: i * (fast ? 0.2 : 0.35), 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute left-4 w-[45%] h-12 bg-gray-200 rounded-2xl"
            style={{ filter: "blur(2px)", opacity: 0.5, top: `${i * 12}%` }}
          />
        ))}
        {/* Right side bubbles (purple) scrolling up */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`right-${i}`}
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            transition={{ 
              duration: fast ? 1.5 : 2.5, 
              delay: i * (fast ? 0.2 : 0.35) + 0.15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute right-4 w-[50%] h-10 bg-[#6B4C7A]/40 rounded-2xl"
            style={{ filter: "blur(2px)", opacity: 0.5, top: `${i * 14 + 5}%` }}
          />
        ))}
      </div>
      
      {subtext && <p className="text-3xl z-10">{subtext}</p>}
      
      {isClickable && (
        <motion.button
          onClick={onClick}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-8 text-gray-400 text-sm px-6 py-3 rounded-full bg-white/90 active:bg-gray-200 z-10 shadow-sm"
        >
          Tap to continue...
        </motion.button>
      )}
    </div>
  );

  // Only show timeline after phase changes, not just when messages complete
  const showTimeline1 = phase === "timeline1" || phase === "chat2" || phase === "timeline2" || phase === "question" || phase === "typing" || phase === "done";
  const showPhase2 = phase === "chat2" || phase === "timeline2" || phase === "question" || phase === "typing" || phase === "done";
  const showTimeline2 = phase === "timeline2" || phase === "question" || phase === "typing" || phase === "done";
  const showPhase3 = phase === "question" || phase === "typing" || phase === "done";

  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
      {/* Chat area - all content scrollable */}
      <div 
        ref={scrollRef} 
        onScroll={handleScroll}
        onTouchMove={handleScroll}
        className={`flex-1 overflow-y-auto scrollbar-hide ${phase === "typing" && showKeyboard ? "pb-[220px]" : "pb-4"}`}
      >
        
        {/* SECTION 1: Initial conversation */}
        <div className="px-4 py-2">
          <div className="text-center py-2 mb-2">
            <span className="text-xs text-gray-400">Sat, 18 May 8:42PM</span>
          </div>

          {/* Photo message (id: 0) */}
          {visibleMessages.includes(0) && renderMessage(phase1Messages[0])}
          
          {/* You matched indicator */}
          {visibleMessages.includes(0) && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-3 mt-4">
              <span className="text-xs text-gray-400">Sat, 18 May 9:15PM</span>
              <div className="mt-2">
                <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">You matched with Dubby</span>
              </div>
            </motion.div>
          )}

          {/* Rest of messages (id: 1-11) */}
          {phase1Messages.slice(1).filter(msg => visibleMessages.includes(msg.id)).map((msg, index, filteredArr) => {
            // Check if previous message in filtered array was from the same person (not isMe)
            const prevMsg = index > 0 ? filteredArr[index - 1] : null;
            const showAvatar = !msg.isMe && (!prevMsg || prevMsg.isMe !== msg.isMe);
            const isConsecutive = prevMsg && prevMsg.isMe === msg.isMe;
            return (
              <div key={msg.id} className={isConsecutive ? "mt-1" : "mt-4"}>
                {renderMessage(msg, showAvatar)}
              </div>
            );
          })}

          <AnimatePresence>
            {isTyping && currentTypingId !== null && currentTypingId <= 11 && (
              renderTypingIndicator(phase1Messages.find(m => m.id === currentTypingId)?.isMe ?? false)
            )}
          </AnimatePresence>
        </div>

        {/* TIMELINE 1: Time passes... (visible when phase changes) */}
        <AnimatePresence>
          {showTimeline1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TimelineSection 
                text="Time passes..." 
                onClick={triggerTimeline1}
                isClickable={phase === "timeline1"}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 2: Biryani message */}
        {showPhase2 && (
          <div className="px-4 py-2 space-y-4">

            {visibleMessages.includes(12) && renderMessage(phase2Message)}

            <AnimatePresence>
              {isTyping && currentTypingId === 12 && renderTypingIndicator(phase2Message.isMe)}
            </AnimatePresence>
          </div>
        )}

        {/* TIMELINE 2: February 14... (visible when phase changes) */}
        <AnimatePresence>
          {showTimeline2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TimelineSection 
                text="February 2, 2026..." 
                subtext=""
                onClick={triggerTimeline2}
                isClickable={phase === "timeline2"}
                fast
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 3: Valentine's question */}
        {showPhase3 && (
          <div className="px-4 py-2 space-y-4">
            <div className="text-center py-2 mb-2">
              <span className="text-xs text-gray-400">Sun, 2 Feb 1:00AM</span>
            </div>

            {visibleMessages.includes(13) && renderMessage(phase3Message)}

            <AnimatePresence>
              {isTyping && currentTypingId === 13 && renderTypingIndicator(phase3Message.isMe)}
            </AnimatePresence>

            {/* Response typing area */}
            {(phase === "typing" || phase === "done") && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-end gap-2 justify-start">
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/photos/photo1.png" alt="Dubby" width={28} height={28} className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-100 text-gray-800 px-4 py-2.5 rounded-2xl min-w-[60px] min-h-[40px] flex items-center">
                  {typedText ? (
                    <p className="text-[15px] font-semibold text-[#7C3AED]">{typedText}</p>
                  ) : (
                    <div className="flex gap-1">
                      <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                      <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                      <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Rose bouquet message after YES */}
            {phase === "done" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.5 }}
                className="flex items-end gap-2 justify-start"
              >
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/photos/photo1.png" alt="Dubby" width={28} height={28} className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-100 text-gray-800 px-4 py-2.5 rounded-2xl max-w-[75%]">
                  <p className="text-[15px]">Now send me a big rose bouquet 🌹💐</p>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Bottom anchor for auto-scroll */}
        <div ref={bottomRef} />
      </div>

      {/* Keyboard */}
      <AnimatePresence>
        {phase === "typing" && showKeyboard && (
          <motion.div 
            initial={{ y: 100 }} 
            animate={{ y: 0 }} 
            exit={{ y: 100 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#D1D3D9] pt-2 pb-6 z-50"
          >
          <div className="flex justify-center gap-[6px] mb-[6px] px-1">
            {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => {
              const isActiveKey = key === "Y" || key === "E";
              return (
                <motion.button key={key} whileTap={isActiveKey ? { scale: 0.95, backgroundColor: "#BBBDC3" } : {}} onClick={() => isActiveKey && handleKeyPress(key)} className={`w-[32px] h-[42px] rounded-md flex items-center justify-center text-[18px] font-normal shadow-sm ${isActiveKey ? "bg-white text-black" : "bg-[#AEB3BC] text-[#AEB3BC]"}`}>
                  {isActiveKey ? key : ""}
                </motion.button>
              );
            })}
          </div>
          <div className="flex justify-center gap-[6px] mb-[6px] px-4">
            {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => {
              const isActiveKey = key === "S";
              return (
                <motion.button key={key} whileTap={isActiveKey ? { scale: 0.95, backgroundColor: "#BBBDC3" } : {}} onClick={() => isActiveKey && handleKeyPress(key)} className={`w-[32px] h-[42px] rounded-md flex items-center justify-center text-[18px] font-normal shadow-sm ${isActiveKey ? "bg-white text-black" : "bg-[#AEB3BC] text-[#AEB3BC]"}`}>
                  {isActiveKey ? key : ""}
                </motion.button>
              );
            })}
          </div>
          <div className="flex justify-center gap-[6px] mb-[10px] px-1">
            <div className="w-[42px] h-[42px] bg-[#AEB3BC] rounded-md" />
            {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (<div key={key} className="w-[32px] h-[42px] bg-[#AEB3BC] rounded-md" />))}
            <div className="w-[42px] h-[42px] bg-[#AEB3BC] rounded-md" />
          </div>
          <div className="flex justify-center gap-[6px] px-1">
            <div className="w-[42px] h-[42px] bg-[#AEB3BC] rounded-md" />
            <div className="w-[36px] h-[42px] bg-[#AEB3BC] rounded-md" />
            <div className="flex-1 max-w-[180px] h-[42px] bg-[#AEB3BC] rounded-md" />
            <div className="w-[88px] h-[42px] bg-[#AEB3BC] rounded-md" />
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
