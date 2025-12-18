import { EvaAvatar } from "./EvaAvatar";
import { X, Minus, MoreVertical, Globe } from "lucide-react";

interface ChatHeaderProps {
  onClose?: () => void;
  onMinimize?: () => void;
}

export function ChatHeader({ onClose, onMinimize }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-t-2xl">
      <div className="flex items-center gap-3">
        <EvaAvatar size="md" />
        <div>
          <h3 className="font-display font-semibold text-base">Eva</h3>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-primary-foreground/80">Online • Sunbird Lilongwe</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button 
          className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-smooth"
          aria-label="Language"
        >
          <Globe className="w-4 h-4" />
        </button>
        <button 
          className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-smooth"
          aria-label="More options"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
        {onMinimize && (
          <button 
            onClick={onMinimize}
            className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-smooth"
            aria-label="Minimize"
          >
            <Minus className="w-4 h-4" />
          </button>
        )}
        {onClose && (
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-primary-foreground/10 transition-smooth"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
