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
        "flex gap-2 sm:gap-3 animate-fade-in w-full",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar - aligned to top */}
      {!isUser && (
        <div className="flex-shrink-0 self-start mt-1">
          <EvaAvatar size="sm" />
        </div>
      )}
      
      {/* Message content container */}
      <div className={cn(
        "flex flex-col gap-1.5 sm:gap-2 min-w-0",
        isUser ? "items-end max-w-[85%] sm:max-w-[80%]" : "items-start max-w-[85%] sm:max-w-[80%]"
      )}>
        {/* Message bubble */}
        <div
          className={cn(
            "rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-soft transition-smooth break-words",
            isUser
              ? "bg-eva-message-user text-primary-foreground rounded-br-md"
              : "bg-eva-message-bot text-foreground rounded-bl-md"
          )}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message.content}</p>
        </div>

        {/* Rich Media Content */}
        {message.data?.cards && message.data.cards.length > 0 && (
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin w-full -mx-1 px-1">
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

      {/* User avatar - aligned to top */}
      {isUser && (
        <div className="flex-shrink-0 self-start mt-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center text-xs sm:text-sm font-medium text-secondary-foreground">
          You
        </div>
      )}
    </div>
  );
}
