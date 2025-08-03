import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";

const upcomingMatches = [
  {
    opponent: "RED Canids",
    date: "2024-08-10",
    time: "18:00",
    tournament: "CBLOL 2024 Split 2",
    venue: "Studio CBLOL",
    status: "upcoming"
  },
  {
    opponent: "paiN Gaming",
    date: "2024-08-15", 
    time: "20:00",
    tournament: "CBLOL 2024 Split 2",
    venue: "Studio CBLOL",
    status: "upcoming"
  },
  {
    opponent: "LOUD",
    date: "2024-08-20",
    time: "19:00", 
    tournament: "CBLOL 2024 Split 2",
    venue: "Studio CBLOL",
    status: "upcoming"
  }
];

const recentMatches = [
  {
    opponent: "Flamengo Los Grandes",
    date: "2024-08-03",
    result: "W",
    score: "2-0",
    tournament: "CBLOL 2024 Split 2"
  },
  {
    opponent: "KaBuM! e-Sports",
    date: "2024-07-28",
    result: "W", 
    score: "2-1",
    tournament: "CBLOL 2024 Split 2"
  },
  {
    opponent: "Vivo Keyd Stars",
    date: "2024-07-25",
    result: "L",
    score: "1-2", 
    tournament: "CBLOL 2024 Split 2"
  }
];

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">AGENDA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe os próximos jogos e resultados recentes da FURIA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Matches */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Próximas Partidas
            </h3>
            <div className="space-y-4">
              {upcomingMatches.map((match, index) => (
                <Card key={index} className="group hover:shadow-furia transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">FURIA vs {match.opponent}</CardTitle>
                      <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                        Próxima
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(match.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {match.time}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {match.venue}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {match.tournament}
                    </Badge>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Assistir Live
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Results */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              Resultados Recentes
            </h3>
            <div className="space-y-4">
              {recentMatches.map((match, index) => (
                <Card key={index} className="group hover:shadow-furia transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">FURIA vs {match.opponent}</CardTitle>
                      <Badge className={`${
                        match.result === 'W' 
                          ? 'bg-green-500/20 text-green-500 border-green-500/30' 
                          : 'bg-red-500/20 text-red-500 border-red-500/30'
                      }`}>
                        {match.result === 'W' ? 'Vitória' : 'Derrota'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {new Date(match.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="text-lg font-bold text-primary">
                        {match.score}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {match.tournament}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fix missing import
import { Trophy } from "lucide-react";