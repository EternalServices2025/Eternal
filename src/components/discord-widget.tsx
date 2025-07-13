import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Shield, ExternalLink } from "lucide-react";

export function DiscordWidget() {
  const handleJoinDiscord = () => {
    window.open('https://discord.gg/ebTTtnKb4N', '_blank');
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground">
            Connect with thousands of satisfied customers in our Discord server
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50 backdrop-blur-sm shadow-card">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-discord/20">
                  <MessageSquare className="w-8 h-8 text-discord" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Eternal Services Discord
                </CardTitle>
              </div>
              <div className="flex justify-center gap-2 mb-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Online
                </Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Official Server
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-primary mr-2" />
                    <span className="text-2xl font-bold text-primary">5,000+</span>
                  </div>
                  <p className="text-muted-foreground">Active Members</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MessageSquare className="w-6 h-6 text-primary mr-2" />
                    <span className="text-2xl font-bold text-primary">24/7</span>
                  </div>
                  <p className="text-muted-foreground">Support Available</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-primary mr-2" />
                    <span className="text-2xl font-bold text-primary">100%</span>
                  </div>
                  <p className="text-muted-foreground">Secure & Safe</p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-foreground">What you'll get:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Instant access to all services
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Direct support from our team
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Exclusive member-only deals
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Community of verified customers
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button
                  onClick={handleJoinDiscord}
                  size="lg"
                  className="bg-discord hover:bg-discord/90 text-discord-foreground border-0 text-lg px-8 py-3"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Discord Server
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Click to join our Discord community and get started!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}