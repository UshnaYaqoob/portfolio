"use client";

import { useEffect, useRef, useState } from "react";
import { FiSend, FiX, FiMessageCircle } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { BOT_NAME, BOT_TOPICS, type BotTopicId } from "@/constants/aiBot";
import { matchTopic } from "@/lib/botEngine";

interface ChatMessage {
    id: number;
    role: "bot" | "user";
    text: string;
    suggestions?: BotTopicId[];
}

let messageId = 0;
const nextId = () => ++messageId;

export default function AIBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const typingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const showTimer = setTimeout(() => setShowTooltip(true), 2500);
        const hideTimer = setTimeout(() => setShowTooltip(false), 7000);

        const dismissOnScroll = () => setShowTooltip(false);
        window.addEventListener("scroll", dismissOnScroll, { passive: true });

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
            window.removeEventListener("scroll", dismissOnScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    useEffect(() => {
        return () => {
            if (typingTimeout.current) clearTimeout(typingTimeout.current);
        };
    }, []);

    const respond = (topicId: BotTopicId) => {
        const topic = BOT_TOPICS[topicId];
        const delay = Math.min(1400, 450 + topic.response.length * 6);

        setIsTyping(true);
        typingTimeout.current = setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [
                ...prev,
                { id: nextId(), role: "bot", text: topic.response, suggestions: topic.suggestions },
            ]);
        }, delay);
    };

    const openChat = () => {
        setOpen(true);
        setShowTooltip(false);
        if (messages.length === 0) {
            respond("greeting");
        }
    };

    const sendUserText = (displayText: string, topicId?: BotTopicId) => {
        const text = displayText.trim();
        if (!text) return;
        setMessages((prev) => [...prev, { id: nextId(), role: "user", text }]);
        respond(topicId ?? matchTopic(text));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;
        sendUserText(input);
        setInput("");
    };

    const handleChip = (topicId: BotTopicId) => {
        if (isTyping) return;
        const label = BOT_TOPICS[topicId].chipLabel || BOT_TOPICS[topicId].response.slice(0, 40);
        sendUserText(label, topicId);
    };

    return (
        <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
            {open && (
                <div
                    className="
                        animate-bot-panel-in
                        w-[calc(100vw-2.5rem)] max-w-sm h-[28rem] max-h-[70vh]
                        flex flex-col overflow-hidden rounded-2xl
                        bg-[#0a1628] light:bg-white
                        border border-blue-900/50 light:border-blue-200/60
                        shadow-2xl shadow-black/40 light:shadow-slate-900/10
                    "
                >
                    <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#101e33] light:bg-blue-50 border-b border-blue-900/40 light:border-blue-200/60">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="relative flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                <HiSparkles className="text-white" size={16} />
                                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#101e33]" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-white light:text-slate-900 truncate">{BOT_NAME}</p>
                                <p className="text-[11px] text-emerald-400 light:text-emerald-600">Online</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white light:text-slate-500 light:hover:text-slate-900 hover:bg-white/10 light:hover:bg-slate-900/5 transition-colors"
                        >
                            <FiX size={16} />
                        </button>
                    </div>
                    <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
                        {messages.map((m) => (
                            <div key={m.id} className="animate-bot-msg-in flex flex-col gap-2">
                                <div className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                                    <div
                                        className={
                                            m.role === "user"
                                                ? "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-line bg-blue-600 text-white rounded-br-sm"
                                                : "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-line bg-[#101e33] light:bg-slate-100 text-slate-200 light:text-slate-700 rounded-bl-sm"
                                        }
                                    >
                                        {m.text}
                                    </div>
                                </div>

                                {m.role === "bot" && m.suggestions && m.suggestions.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5">
                                        {m.suggestions.map((sid) => (
                                            <button
                                                key={sid}
                                                type="button"
                                                onClick={() => handleChip(sid)}
                                                className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-blue-800/50 light:border-blue-200 text-blue-300 light:text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                                            >
                                                {BOT_TOPICS[sid].chipLabel}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-[#101e33] light:bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bot-dot" style={{ animationDelay: "0ms" }} />
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bot-dot" style={{ animationDelay: "150ms" }} />
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bot-dot" style={{ animationDelay: "300ms" }} />
                                </div>
                            </div>
                        )}
                    </div>
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-blue-900/40 light:border-blue-200/60">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about skills, projects..."
                            className="flex-1 min-w-0 bg-[#050b18] light:bg-slate-50 border border-slate-800 light:border-slate-200 rounded-full px-4 py-2 text-[13px] text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-blue-600"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isTyping}
                            aria-label="Send message"
                            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 transition-colors"
                        >
                            <FiSend size={14} />
                        </button>
                    </form>
                </div>
            )}
            {!open && showTooltip && (
                <button
                    type="button"
                    onClick={openChat}
                    className="animate-bot-tooltip max-w-[13rem] text-left text-xs font-medium bg-[#101e33] light:bg-white text-slate-200 light:text-slate-700 border border-blue-900/50 light:border-blue-200/60 rounded-2xl rounded-br-sm px-3.5 py-2.5 shadow-lg"
                >
                    Ask me why you should hire Ushna
                </button>
            )}

            <div className="relative">
                {!open && <span className="absolute inset-0 rounded-full bg-blue-500 animate-bot-ring" />}
                <button
                    type="button"
                    onClick={() => (open ? setOpen(false) : openChat())}
                    aria-label={open ? "Close AI assistant" : "Open AI assistant"}
                    className="animate-bot-fab-in relative w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-900/40 hover:scale-105 active:scale-95 transition-transform [&:not(:hover)]:animate-bot-float"
                >
                    {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
                </button>
            </div>
        </div>
    );
}
