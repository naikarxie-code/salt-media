"use client";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  action?: "navigate" | "none";
  section?: string | null;
}

interface ChatMessageProps {
  message: Message;
  onNavigate?: (sectionId: string) => void;
}

export default function ChatMessage({ message, onNavigate }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} mb-4 group`}>
      {/* Sender Header */}
      <div className="flex items-center gap-2 mb-1 px-1">
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            isUser ? "bg-neutral-500" : "bg-amber-400 animate-pulse"
          }`}
        />
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
          {isUser ? "YOU" : "ASK SALT"}
        </span>
      </div>

      {/* Bubble Container */}
      <div
        className={`max-w-[88%] p-3.5 md:p-4 rounded-2xl text-xs md:text-sm leading-relaxed ${
          isUser
            ? "bg-neutral-800 text-white rounded-tr-none border border-neutral-700/60 shadow-md"
            : "bg-neutral-900/90 text-neutral-200 rounded-tl-none border border-amber-500/20 shadow-lg backdrop-blur-md"
        }`}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>

        {/* Section Navigation Badge */}
        {!isUser && message.action === "navigate" && message.section && (
          <div className="mt-3 pt-2.5 border-t border-amber-400/20 flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              NAVIGATING TO #{message.section}
            </span>
            {onNavigate && (
              <button
                onClick={() => onNavigate(message.section!)}
                className="px-2.5 py-1 rounded-md bg-amber-400/20 hover:bg-amber-400 hover:text-black border border-amber-400/40 text-[10px] font-mono font-semibold uppercase tracking-wider transition-all text-amber-300"
              >
                GO TO SECTION →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
