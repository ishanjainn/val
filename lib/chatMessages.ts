export interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean; // true = your message (right side, purple), false = her message (left side, gray)
}

// Replace these with your actual first conversation!
// isUser: true = your messages (shown on right in purple)
// isUser: false = her messages (shown on left in gray)
export const chatMessages: ChatMessage[] = [
  {
    id: 1,
    text: "Hey! I noticed you like early 2000s R&B hits too 👀",
    isUser: true,
  },
  {
    id: 2,
    text: "Haha yes! It's the best era honestly",
    isUser: false,
  },
  {
    id: 3,
    text: "What's your go-to song?",
    isUser: true,
  },
  {
    id: 4,
    text: "Probably Crazy in Love, basic but it slaps",
    isUser: false,
  },
  {
    id: 5,
    text: "Nothing basic about a classic! We should grab coffee and debate this properly",
    isUser: true,
  },
  {
    id: 6,
    text: "I'd like that 😊",
    isUser: false,
  },
];

// Final message after the chat recreation
export const finalMessage = "And that's how it all started... Happy Valentine's Day, Dub! 💜";
