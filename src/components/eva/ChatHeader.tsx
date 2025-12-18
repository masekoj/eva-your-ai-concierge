import { EvaAvatar } from "./EvaAvatar";
import { X, Minus, MoreVertical, Globe } from "lucide-react";

interface ChatHeaderProps {
  onClose?: () => void;
  onMinimize?: () => void;
}

export function ChatHeader({ onClose, onMinimize }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground sm:rounded-t-2xl flex-shrink-0">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <EvaAvatar size="md" />
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-base">Eva</h3>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-xs text-primary-foreground/80 truncate">Online • Sunbird Lilongwe</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
        <button 
          className="p-1.5 sm:p-2 rounded-lg hover:bg-primary-foreground/10 transition-smooth"
          aria-label="Language"
        >
          <Globe className="w-4 h-4" />
        </button>
        <button 
          className="p-1.5 sm:p-2 rounded-lg hover:bg-primary-foreground/10 transition-smooth hidden sm:flex"
          aria-label="More options"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
        {onMinimize && (
          <button 
            onClick={onMinimize}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-primary-foreground/10 transition-smooth hidden sm:flex"
            aria-label="Minimize"
          >
            <Minus className="w-4 h-4" />
          </button>
        )}
        {onClose && (
          <button 
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-primary-foreground/10 transition-smooth"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
