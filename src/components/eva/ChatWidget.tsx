import { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import { EvaAvatar } from "./EvaAvatar";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="mb-4 animate-slide-up">
          <ChatWindow onClose={handleClose} onMinimize={handleMinimize} />
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className={cn(
          "group relative flex items-center justify-center w-16 h-16 rounded-full shadow-elevated transition-all duration-300",
          "bg-gradient-to-br from-primary to-accent hover:shadow-glow hover:scale-105 active:scale-95",
          isOpen && "rotate-0"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat with Eva"}
      >
        <div className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
        )} />
        
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground relative z-10" />
        ) : (
          <div className="relative z-10">
            <MessageCircle className="w-7 h-7 text-primary-foreground" />
          </div>
        )}

        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
            1
          </span>
        )}

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-foreground text-background px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-elevated">
              Chat with Eva
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-foreground rotate-45" />
            </div>
          </div>
        )}
      </button>
    </div>
  );
}
