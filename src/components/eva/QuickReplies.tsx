import { QuickReply } from "@/types/chat";
import { cn } from "@/lib/utils";
import { 
  Bed, 
  UtensilsCrossed, 
  MapPin, 
  Calendar, 
  HelpCircle, 
  Phone,
  Sparkles,
  TreePine
} from "lucide-react";

interface QuickRepliesProps {
  replies: QuickReply[];
  onSelect?: (value: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  bed: <Bed className="w-3.5 h-3.5" />,
  dining: <UtensilsCrossed className="w-3.5 h-3.5" />,
  location: <MapPin className="w-3.5 h-3.5" />,
  calendar: <Calendar className="w-3.5 h-3.5" />,
  help: <HelpCircle className="w-3.5 h-3.5" />,
  phone: <Phone className="w-3.5 h-3.5" />,
  sparkles: <Sparkles className="w-3.5 h-3.5" />,
  activities: <TreePine className="w-3.5 h-3.5" />,
};

export function QuickReplies({ replies, onSelect }: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1.5 sm:mt-2 animate-slide-up">
      {replies.map((reply) => (
        <button
          key={reply.id}
          onClick={() => onSelect?.(reply.value)}
          className={cn(
            "inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium",
            "bg-secondary text-secondary-foreground border border-border/50",
            "transition-smooth hover:bg-primary hover:text-primary-foreground hover:border-primary",
            "active:scale-95 shadow-soft"
          )}
        >
          {reply.icon && iconMap[reply.icon]}
          {reply.label}
        </button>
      ))}
    </div>
  );
}
