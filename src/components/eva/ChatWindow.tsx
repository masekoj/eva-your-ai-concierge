import { useRef, useEffect } from "react";
import { useChat } from "@/hooks/useChat";
import { ChatHeader } from "./ChatHeader";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { ChatInput } from "./ChatInput";
import { cn } from "@/lib/utils";

interface ChatWindowProps {
  className?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  isFullScreen?: boolean;
}

export function ChatWindow({ className, onClose, onMinimize, isFullScreen = false }: ChatWindowProps) {
  const { messages, isTyping, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleQuickReply = (value: string) => {
    sendMessage(value);
  };

  return (
    <div
      className={cn(
        "flex flex-col bg-background border border-border rounded-2xl shadow-elevated overflow-hidden",
        isFullScreen ? "w-full h-full" : "w-[400px] h-[600px]",
        className
      )}
    >
      <ChatHeader onClose={onClose} onMinimize={onMinimize} />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin bg-gradient-to-b from-background to-secondary/20">
        {messages.map((message, index) => (
          <MessageBubble
            key={message.id}
            message={message}
            onQuickReply={handleQuickReply}
            isLast={index === messages.length - 1}
          />
        ))}

        {isTyping && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
        <ChatInput onSend={sendMessage} disabled={isTyping} />
        <p className="text-[10px] text-muted-foreground text-center mt-2">
          Eva • Powered by Sunbird Tourism
        </p>
      </div>
    </div>
  );
}
