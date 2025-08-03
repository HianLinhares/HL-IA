import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Target, Calendar } from "lucide-react";

const achievements = [
  {
    title: "CBLOL 2024 - Campeões",
    date: "2024",
    description: "Conquistamos o título do Campeonato Brasileiro de League of Legends",
    icon: Trophy,
    type: "champion"
  },
  {
    title: "MSI 2024 - Participação",
    date: "2024",
    description: "Representamos o Brasil no Mid-Season Invitational",
    icon: Target,
    type: "international"
  },
  {
    title: "CBLOL 2023 - Vice-campeões",
    date: "2023", 
    description: "Segunda colocação no campeonato nacional",
    icon: Medal,
    type: "runner-up"
  },
  {
    title: "CBLOL 2022 - Campeões",
    date: "2022",
    description: "Título do segundo split do campeonato brasileiro",
    icon: Trophy,
    type: "champion"
  }
];

const stats = [
  { label: "Taxa de Vitórias", value: "68%", description: "Em 2024" },
  { label: "KDA Médio", value: "2.4", description: "Do time" },
  { label: "Tempo Médio", value: "32m", description: "Por partida" },
  { label: "Pentakills", value: "7", description: "Na temporada" }
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">CONQUISTAS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa jornada rumo ao topo do League of Legends brasileiro
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center bg-gradient-furia border-border/50">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-furia-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-furia-white/90">{stat.label}</div>
                <div className="text-xs text-furia-white/70 mt-1">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={achievement.title} className="group hover:shadow-furia transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-full ${
                      achievement.type === 'champion' ? 'bg-yellow-500/20 text-yellow-500' :
                      achievement.type === 'international' ? 'bg-blue-500/20 text-blue-500' :
                      'bg-gray-500/20 text-gray-500'
                    }`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {achievement.title}
                      </CardTitle>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {achievement.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}