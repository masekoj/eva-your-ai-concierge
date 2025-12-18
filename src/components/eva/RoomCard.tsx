import { CardData } from "@/types/chat";
import { cn } from "@/lib/utils";
import { Bed, Users, Maximize2 } from "lucide-react";

interface RoomCardProps {
  card: CardData;
  className?: string;
}

export function RoomCard({ card, className }: RoomCardProps) {
  return (
    <div
      className={cn(
        "min-w-[260px] max-w-[280px] bg-card rounded-xl overflow-hidden shadow-elevated transition-smooth hover:shadow-glow hover:-translate-y-1 border border-border/50",
        className
      )}
    >
      {card.image && (
        <div className="relative h-36 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {card.price && (
            <div className="absolute bottom-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-soft">
              ${card.price}/night
            </div>
          )}
        </div>
      )}
      
      <div className="p-4">
        <h4 className="font-display font-semibold text-foreground mb-1">
          {card.title}
        </h4>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {card.description}
        </p>

        {card.details && card.details.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {card.details.slice(0, 3).map((detail, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-full"
              >
                {idx === 0 && <Users className="w-3 h-3" />}
                {idx === 1 && <Bed className="w-3 h-3" />}
                {idx === 2 && <Maximize2 className="w-3 h-3" />}
                {detail}
              </span>
            ))}
          </div>
        )}

        {card.action && (
          <button
            className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg text-sm font-medium transition-smooth hover:bg-primary/90 active:scale-95"
            onClick={() => {
              if (card.action?.type === 'link' && card.action.value) {
                window.open(card.action.value, '_blank');
              }
            }}
          >
            {card.action.label}
          </button>
        )}
      </div>
    </div>
  );
}
