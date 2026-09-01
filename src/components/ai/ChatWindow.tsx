"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import ChatMessage, { Message } from "./ChatMessage";
import SuggestedQuestions from "./SuggestedQuestions";

interface ChatWindowProps {
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function ChatWindow({ onClose, onNavigateSection }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi. I'm Ask Salt.\n\nAsk me about Salt Media, our work, AFP, content formats, or what we could build together.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom of messages container
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Focus textarea on open
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      // Send conversation history (max latest 10 messages)
      const apiPayload = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiPayload }),
      });

      const data = await res.json();

      if (!res.ok || !data) {
        throw new Error(data?.answer || "Failed to reach server");
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.answer || "I'm sorry, I couldn't process that right now.",
        action: data.action || "none",
        section: data.section || null,
      };

      setMessages((prev) => [...prev, botMessage]);

      // If response includes navigation action, execute navigation!
      if (data.action === "navigate" && data.section) {
        setTimeout(() => {
          onNavigateSection(data.section);
        }, 400);
      }
    } catch (err: unknown) {
      console.error("Chat error:", err);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I couldn't process that right now. Please try again.",
        action: "none",
        section: null,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-neutral-950/95 backdrop-blur-2xl border-r border-neutral-800 shadow-[20px_0_50px_rgba(0,0,0,0.8)] text-white overflow-hidden relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-amber-600/05 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="p-4 md:p-5 border-b border-neutral-800/80 flex items-center justify-between z-10 bg-neutral-950/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold text-xs font-mono">
            ★
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm tracking-tight text-white uppercase">
                ASK SALT
              </h3>
              <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30 uppercase">
                AI GUIDE
              </span>
            </div>
            <p className="text-[10px] font-mono text-neutral-400">
              SALT MEDIA WEBSITE ASSISTANT
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900/80 text-neutral-400 hover:text-white hover:border-amber-400/50 flex items-center justify-center transition-all text-xs"
          aria-label="Close Ask Salt chat"
        >
          ✕
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-5 z-10 space-y-2 custom-scrollbar">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            onNavigate={onNavigateSection}
          />
        ))}

        {/* Suggested Questions in Welcome State */}
        {messages.length === 1 && (
          <SuggestedQuestions onSelect={(q) => handleSend(q)} />
        )}

        {/* Loading / Thinking state */}
        {isLoading && (
          <div className="flex items-center gap-3 py-2 px-3 text-neutral-400 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-amber-400/90 font-medium">Thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Footer / Input Bar */}
      <div className="p-3.5 md:p-4 border-t border-neutral-800/80 z-10 bg-neutral-950/90 backdrop-blur-md">
        <div className="relative flex items-center bg-neutral-900/90 rounded-2xl border border-neutral-800 focus-within:border-amber-400/60 transition-all p-1.5 shadow-inner">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Salt Media, work, AFP..."
            rows={1}
            disabled={isLoading}
            className="flex-1 bg-transparent px-3 py-2 text-xs md:text-sm text-white placeholder-neutral-500 focus:outline-none resize-none max-h-24 custom-scrollbar"
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 rounded-xl bg-amber-400 text-black font-semibold text-xs tracking-wider uppercase hover:bg-amber-300 disabled:opacity-30 disabled:hover:bg-amber-400 transition-all ml-1 flex-shrink-0"
          >
            SEND
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-neutral-400 px-1">
          <span>ENTER TO SEND • SHIFT + ENTER FOR NEWLINE</span>
          <span className="text-amber-400/70 font-semibold">POWERED BY NVIDIA LLM</span>
        </div>
      </div>
    </div>
  );
}
