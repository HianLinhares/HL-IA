import { cn } from "@/lib/utils";
import furiaLogo from "@/assets/furia-pantera.png";

interface FuriaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

export function FuriaLogo({ className, size = "md", animated = false }: FuriaLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  return (
    <div className={cn(
      "flex items-center gap-3",
      className
    )}>
      <img 
        src={furiaLogo} 
        alt="FURIA Pantera" 
        className={cn(
          sizeClasses[size],
          "filter dark:invert transition-furia",
          animated && "animate-float"
        )}
      />
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-primary tracking-tight">FURIA</span>
        <span className="text-sm text-muted-foreground font-medium">ESPORTS</span>
      </div>
    </div>
  );
}