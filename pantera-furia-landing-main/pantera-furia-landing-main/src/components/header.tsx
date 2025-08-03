import { ThemeToggle } from "@/components/theme-toggle";
import { FuriaLogo } from "@/components/furia-logo";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <FuriaLogo animated />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#team" className="text-sm font-medium text-foreground hover:text-primary transition-furia">
              Time
            </a>
            <a href="#achievements" className="text-sm font-medium text-foreground hover:text-primary transition-furia">
              Conquistas
            </a>
            <a href="#schedule" className="text-sm font-medium text-foreground hover:text-primary transition-furia">
              Agenda
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-furia">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="default" size="sm" className="hidden sm:flex">
              <Trophy className="w-4 h-4 mr-2" />
              Apoie o Time
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}