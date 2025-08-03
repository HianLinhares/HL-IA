import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Trophy, Users } from "lucide-react";
import heroBanner from "@/assets/furia-hero-banner.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="FURIA Hero" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary/30">
            🏆 Campeões CBLOL 2024
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            FURIA
            <span className="block text-4xl md:text-6xl text-muted-foreground mt-2">
              LEAGUE OF LEGENDS
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A força da pantera nas Rifts do Invoker. O time de League of Legends da FURIA 
            representa a elite do esports brasileiro, conquistando títulos e corações.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="px-8 py-3 text-base font-semibold shadow-furia">
              <Play className="w-5 h-5 mr-2" />
              Assista aos Highlights
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base">
              <Users className="w-5 h-5 mr-2" />
              Conheça o Time
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Jogadores</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Títulos CBLOL</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">2024</div>
              <div className="text-sm text-muted-foreground">Último Título</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">MSI</div>
              <div className="text-sm text-muted-foreground">Participação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
}