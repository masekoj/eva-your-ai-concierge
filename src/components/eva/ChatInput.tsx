import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Send, Mic, Paperclip, Smile } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({ onSend, disabled = false, placeholder = "Type your message..." }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 120) + 'px';
    }
  }, [message]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-end gap-2 p-3 bg-card border border-border rounded-2xl shadow-soft transition-smooth focus-within:shadow-elevated focus-within:border-primary/30">
        <button
          type="button"
          className="p-2 text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-muted"
          aria-label="Attach file"
        >
          <Paperclip className="w-5 h-5" />
        </button>

        <textarea
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className={cn(
            "flex-1 resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none",
            "max-h-[120px] scrollbar-thin"
          )}
        />

        <button
          type="button"
          className="p-2 text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-muted"
          aria-label="Add emoji"
        >
          <Smile className="w-5 h-5" />
        </button>

        <button
          type="button"
          className="p-2 text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-muted"
          aria-label="Voice message"
        >
          <Mic className="w-5 h-5" />
        </button>

        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className={cn(
            "p-2.5 rounded-xl transition-smooth",
            message.trim() && !disabled
              ? "bg-primary text-primary-foreground shadow-soft hover:shadow-elevated active:scale-95"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          )}
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
