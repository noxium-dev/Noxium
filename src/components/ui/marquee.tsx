import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

export function Marquee({
  children,
  className,
  speed = "normal",
  pauseOnHover = true,
  direction = "left",
}: MarqueeProps) {
  const speedMap = {
    slow: "60s",
    normal: "30s",
    fast: "15s",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        pauseOnHover && "group",
        className
      )}
    >
      <motion.div
        className={cn(
          "flex gap-8 w-max",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${speedMap[speed]} linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </motion.div>
      
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}

interface MarqueeItemProps {
  children: ReactNode;
  className?: string;
  gradientColor?: string;
}

export function MarqueeItem({ children, className, gradientColor }: MarqueeItemProps) {
  return (
    <div className="relative group">
      {/* Gradient border */}
      <div 
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r p-[1px] opacity-60 group-hover:opacity-100 transition-opacity duration-300",
          gradientColor || "from-blue-500 to-purple-500"
        )}
      >
        <div className="h-full w-full rounded-lg bg-background" />
      </div>
      
      {/* Content */}
      <div
        className={cn(
          "relative flex items-center justify-center px-6 py-3 rounded-lg bg-muted/50 backdrop-blur-sm",
          "group-hover:bg-muted/70 transition-colors duration-300",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
