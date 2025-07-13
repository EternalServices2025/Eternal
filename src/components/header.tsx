import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";
import eternalLogo from "@/assets/eternal-logo.png";

export function Header() {
  const handleDiscordSupport = () => {
    window.open('https://discord.gg/ebTTtnKb4N', '_blank');
  };

  const handleJoinDiscord = () => {
    window.open('https://discord.gg/ebTTtnKb4N', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={eternalLogo} 
              alt="Eternal Services" 
              className="w-8 h-8 rounded-lg"
            />
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Eternal Services
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDiscordSupport}
              className="border-border/50 hover:bg-muted/50"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Support
            </Button>
            <Button
              onClick={handleJoinDiscord}
              className="bg-discord hover:bg-discord/90 text-discord-foreground border-0"
              size="sm"
            >
              <Users className="w-4 h-4 mr-2" />
              Join Discord
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}