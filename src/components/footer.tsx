import { MessageSquare, Users, Shield } from "lucide-react";
import eternalLogo from "@/assets/eternal-logo.png";

export function Footer() {
  const handleDiscordClick = () => {
    window.open('https://discord.gg/ebTTtnKb4N', '_blank');
  };

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={eternalLogo} 
                alt="Eternal Services" 
                className="w-8 h-8 rounded-lg"
              />
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Eternal Services
              </h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your trusted source for premium accounts and services. We provide secure, instant delivery 
              of Discord Nitro, Microsoft, Roblox, TikTok accounts and more.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                100% Secure
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                24/7 Support
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Discord Nitro</li>
              <li>Microsoft Accounts</li>
              <li>Roblox Premium</li>
              <li>TikTok Accounts</li>
              <li>Discord Accounts</li>
              <li>Premium Bundles</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={handleDiscordClick}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Discord Support
                </button>
              </li>
              <li className="text-muted-foreground">FAQ</li>
              <li className="text-muted-foreground">Terms of Service</li>
              <li className="text-muted-foreground">Privacy Policy</li>
              <li className="text-muted-foreground">Refund Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Eternal Services. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Join our Discord for instant support and updates
          </p>
        </div>
      </div>
    </footer>
  );
}