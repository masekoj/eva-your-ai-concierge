import { cn } from "@/lib/utils";

interface EvaAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  isTyping?: boolean;
  className?: string;
}

export function EvaAvatar({ size = 'md', isTyping = false, className }: EvaAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-base',
  };

  return (
    <div
      className={cn(
        "relative rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-semibold text-primary-foreground shadow-soft",
        sizeClasses[size],
        isTyping && "animate-pulse-soft",
        className
      )}
    >
      <span className="relative z-10">E</span>
      {isTyping && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 animate-ping" />
      )}
      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
    </div>
  );
}
