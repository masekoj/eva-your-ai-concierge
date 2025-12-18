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
        "min-w-[220px] sm:min-w-[260px] max-w-[240px] sm:max-w-[280px] bg-card rounded-xl overflow-hidden shadow-elevated transition-smooth hover:shadow-glow hover:-translate-y-1 border border-border/50 flex-shrink-0",
        className
      )}
    >
      {card.image && (
        <div className="relative h-28 sm:h-36 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {card.price && (
            <div className="absolute bottom-2 right-2 bg-accent text-accent-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-soft">
              ${card.price}/night
            </div>
          )}
        </div>
      )}
      
      <div className="p-3 sm:p-4">
        <h4 className="font-display font-semibold text-foreground mb-1 text-sm sm:text-base">
          {card.title}
        </h4>
        <p className="text-xs text-muted-foreground mb-2 sm:mb-3 line-clamp-2">
          {card.description}
        </p>

        {card.details && card.details.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            {card.details.slice(0, 3).map((detail, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] text-muted-foreground bg-muted px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
              >
                {idx === 0 && <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                {idx === 1 && <Bed className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                {idx === 2 && <Maximize2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                {detail}
              </span>
            ))}
          </div>
        )}

        {card.action && (
          <button
            className="w-full py-1.5 sm:py-2 px-3 sm:px-4 bg-primary text-primary-foreground rounded-lg text-xs sm:text-sm font-medium transition-smooth hover:bg-primary/90 active:scale-95"
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
