import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Zap, Users } from "lucide-react";
import eternalLogo from "@/assets/eternal-logo.png";

export function Hero() {
  const handleGetStarted = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinDiscord = () => {
    window.open('https://discord.gg/ebTTtnKb4N', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={eternalLogo} 
              alt="Eternal Services" 
              className="w-24 h-24 mx-auto rounded-2xl shadow-glow"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Eternal Services
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in delay-200">
            Premium accounts and services at unbeatable prices. Discord, Microsoft, Roblox, TikTok and more.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 rounded-lg bg-primary/20">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="p-2 rounded-lg bg-primary/20">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">Instant Delivery</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-end">
              <div className="p-2 rounded-lg bg-primary/20">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-primary hover:bg-primary/90 text-primary-foreground border-0 text-lg px-8 py-3 shadow-glow"
            >
              Browse Services
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={handleJoinDiscord}
              variant="outline"
              size="lg"
              className="border-border/50 hover:bg-muted/50 text-lg px-8 py-3"
            >
              Join Our Discord
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Accounts Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}