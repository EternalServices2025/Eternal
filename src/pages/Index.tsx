import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { DiscordWidget } from "@/components/discord-widget";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <DiscordWidget />
      <Footer />
    </div>
  );
};

export default Index;
