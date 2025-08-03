import { FuriaLogo } from "@/components/furia-logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Twitch } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <FuriaLogo />
            <p className="text-sm text-muted-foreground">
              A força da pantera nas Rifts do Invoker. Representando o Brasil no cenário mundial do League of Legends.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#team" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Time
              </a>
              <a href="#achievements" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Conquistas
              </a>
              <a href="#schedule" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Agenda
              </a>
              <a href="https://loja.furia.gg" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Loja Oficial
              </a>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Comunidade</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Discord
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Reddit
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Newsletter
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Fã Clube
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Redes Sociais</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="icon" className="hover:bg-blue-500 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-pink-500 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-red-500 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-purple-500 hover:text-white transition-colors">
                <Twitch className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 FURIA Esports. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}