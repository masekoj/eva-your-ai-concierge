import { useState } from "react";
import { ChatWindow } from "./ChatWindow";
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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="fixed inset-0 sm:relative sm:inset-auto sm:mb-4 animate-fade-in sm:animate-slide-up">
          <ChatWindow onClose={handleClose} onMinimize={handleMinimize} isFullScreen />
        </div>
      )}

      {/* Floating Button - Hidden when chat is open on mobile */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className={cn(
          "group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-elevated transition-all duration-300",
          "bg-gradient-to-br from-primary to-accent hover:shadow-glow hover:scale-105 active:scale-95",
          isOpen && "hidden sm:flex"
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
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
          </div>
        )}

        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
            1
          </span>
        )}

        {/* Tooltip - Desktop only */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
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
