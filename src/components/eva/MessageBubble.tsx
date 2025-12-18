import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";
import { EvaAvatar } from "./EvaAvatar";
import { RoomCard } from "./RoomCard";
import { QuickReplies } from "./QuickReplies";
import { format } from "date-fns";

interface MessageBubbleProps {
  message: Message;
  onQuickReply?: (value: string) => void;
  isLast?: boolean;
}

export function MessageBubble({ message, onQuickReply, isLast }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        "flex items-end gap-3 animate-fade-in",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {!isUser && <EvaAvatar size="sm" />}
      
      <div className={cn("flex flex-col gap-2 max-w-[80%]", isUser && "items-end")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-3 shadow-soft transition-smooth",
            isUser
              ? "bg-eva-message-user text-primary-foreground rounded-br-md"
              : "bg-eva-message-bot text-foreground rounded-bl-md"
          )}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>

        {/* Rich Media Content */}
        {message.data?.cards && message.data.cards.length > 0 && (
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {message.data.cards.map((card) => (
              <RoomCard key={card.id} card={card} />
            ))}
          </div>
        )}

        {/* Quick Replies */}
        {message.data?.quickReplies && isLast && (
          <QuickReplies
            replies={message.data.quickReplies}
            onSelect={onQuickReply}
          />
        )}

        {/* Timestamp */}
        <span className="text-[10px] text-muted-foreground px-1">
          {format(message.timestamp, 'HH:mm')}
        </span>
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-secondary-foreground">
          You
        </div>
      )}
    </div>
  );
}
