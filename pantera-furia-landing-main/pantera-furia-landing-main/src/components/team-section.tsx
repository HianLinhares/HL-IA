import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Trophy } from "lucide-react";

const players = [
  {
    name: "Robo",
    role: "Top Laner",
    realName: "Gabriel Martins",
    nationality: "Brasil",
    age: 21,
    achievements: ["CBLOL 2024", "MSI Participant"],
    champion: "Aatrox"
  },
  {
    name: "Cariok",
    role: "Jungler", 
    realName: "João Vitor Carvalho",
    nationality: "Brasil",
    age: 22,
    achievements: ["CBLOL 2024", "MVP Split"],
    champion: "Graves"
  },
  {
    name: "Grevthar",
    role: "Mid Laner",
    realName: "Gabriel Braz",
    nationality: "Brasil", 
    age: 20,
    achievements: ["CBLOL 2024", "Rookie of the Year"],
    champion: "Azir"
  },
  {
    name: "bvoy",
    role: "ADC",
    realName: "Victor Hugo",
    nationality: "Brasil",
    age: 23,
    achievements: ["CBLOL 2024", "Pentakill Record"],
    champion: "Jinx"
  },
  {
    name: "Kuri",
    role: "Support",
    realName: "Guilherme Henrique",
    nationality: "Brasil",
    age: 19,
    achievements: ["CBLOL 2024", "Best Support"],
    champion: "Thresh"
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-primary mb-4">NOSSO TIME</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os guerreiros que representam a FURIA nas Rifts do Invoker
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {players.map((player, index) => (
            <Card key={player.name} className="group hover:shadow-furia transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-pantera rounded-full flex items-center justify-center text-furia-white font-bold text-2xl group-hover:animate-pulse">
                  {player.name.charAt(0)}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">{player.name}</h3>
                  <Badge variant="secondary" className="mb-2">{player.role}</Badge>
                  <p className="text-sm text-muted-foreground">{player.realName}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {player.nationality}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {player.age} anos
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">Main Champion</p>
                  <Badge variant="outline">{player.champion}</Badge>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary flex items-center justify-center gap-1">
                    <Trophy className="w-4 h-4" />
                    Conquistas
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {player.achievements.map((achievement) => (
                      <Badge key={achievement} variant="outline" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}