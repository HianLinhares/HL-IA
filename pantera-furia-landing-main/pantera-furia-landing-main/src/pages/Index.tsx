import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TeamSection } from "@/components/team-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ScheduleSection } from "@/components/schedule-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TeamSection />
        <AchievementsSection />
        <ScheduleSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
