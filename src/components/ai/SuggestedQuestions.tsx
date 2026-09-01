"use client";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

const SUGGESTIONS = [
  "What does Salt Media do?",
  "How does your AFP model work?",
  "What content formats do you create?",
  "Who have you worked with?",
  "What could you build for my brand?",
  "How can I start a conversation?",
];

export default function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="space-y-2.5 my-4">
      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-amber-400/80 font-semibold">
        SUGGESTED QUESTIONS
      </p>
      <div className="flex flex-col gap-2">
        {SUGGESTIONS.map((question, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(question)}
            className="text-left text-xs text-neutral-300 hover:text-white px-3.5 py-2.5 rounded-xl border border-neutral-800/80 bg-neutral-900/60 hover:bg-amber-400/10 hover:border-amber-400/40 transition-all duration-200 flex items-center justify-between group"
          >
            <span>{question}</span>
            <span className="text-amber-400/60 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform text-xs">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
