import { ServiceCard } from "@/components/ui/service-card";
import { Bot, Gamepad2, MessageSquare, Music, User, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Services() {
  const { toast } = useToast();

  const handleGetService = (serviceName: string) => {
    toast({
      title: "Service Request",
      description: `Join our Discord server to get ${serviceName}!`,
    });
    window.open('https://discord.gg/ebTTtnKb4N', '_blank');
  };

  const services = [
    {
      title: "Microsoft Account",
      description: "Premium Microsoft account with Office 365 access",
      price: "7 Invites",
      originalPrice: "$6.99/mo",
      icon: <User className="w-8 h-8 text-primary" />,
      features: [
        "Can use as alt or backup",
        "Fast response",
      ],
      isPopular: true,
      isFree: false
    },
    {
      title: "Roblox Account",
      description: "Premium Roblox account with Robux and exclusive items",
      price: "5 Invites", 
      originalPrice: "$4.99/mo",
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      features: [
        "Normal account, can use for alts",
      ],
      isPopular: false,
      isFree: false
    },
    {
      title: "TikTok Account",
      description: "Verified TikTok account with premium features",
      price: "5 Invites",
      originalPrice: "$2.99/mo", 
      icon: <Music className="w-8 h-8 text-primary" />,
      features: [
        "tiktok account for alts",
      ],
      isPopular: false,
      isFree: false
    },
    {
      title: "Discord Account",
      description: "Fresh Discord account ready to use",
      price: "SOON",
      originalPrice: "",
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      features: [
        "Coming Soon"
      ],
      isPopular: false,
      isFree: false // changed from true to false
    },
    {
      title: "Premium Bundle",
      description: "Get all services at a massive discount",
      price: "10 Invites",
      originalPrice: "$25.99/mo",
      icon: <Zap className="w-8 h-8 text-primary" />,
      features: [
        "Better accounts",
        "More services",
        "cheaper deals",
      ],
      isPopular: true,
      isFree: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our premium selection of accounts and services. All delivered instantly with 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              originalPrice={service.originalPrice}
              icon={service.icon}
              features={service.features}
              isPopular={service.isPopular}
              isFree={service.isFree}
              onGetService={
                service.price !== "SOON"
                  ? () => handleGetService(service.title)
                  : undefined
              }
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All services come with a 30-day guarantee and 24/7 support
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-primary" />
              Instant Delivery
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4 text-primary" />
              24/7 Support
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4 text-primary" />
              Verified Accounts
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
