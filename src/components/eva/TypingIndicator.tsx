import { EvaAvatar } from "./EvaAvatar";

export function TypingIndicator() {
  return (
    <div className="flex items-end gap-3 animate-fade-in">
      <EvaAvatar size="sm" isTyping />
      <div className="bg-eva-message-bot rounded-2xl rounded-bl-md px-4 py-3 shadow-soft">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-muted-foreground/60 rounded-full typing-dot" />
          <span className="w-2 h-2 bg-muted-foreground/60 rounded-full typing-dot" />
          <span className="w-2 h-2 bg-muted-foreground/60 rounded-full typing-dot" />
        </div>
      </div>
    </div>
  );
}
