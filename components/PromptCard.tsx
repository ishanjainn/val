"use client";

interface PromptCardProps {
  label: string;
  answer: string;
}

export default function PromptCard({ label, answer }: PromptCardProps) {
  return (
    <div className="bg-white mx-4 rounded-xl p-4">
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <p className="text-black text-base leading-relaxed">{answer}</p>
    </div>
  );
}
