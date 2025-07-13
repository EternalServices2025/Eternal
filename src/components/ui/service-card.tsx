import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Zap } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  icon: React.ReactNode;
  features: string[];
  isPopular?: boolean;
  isFree?: boolean;
  onGetService: () => void;
}

export function ServiceCard({
  title,
  description,
  price,
  originalPrice,
  icon,
  features,
  isPopular = false,
  isFree = false,
  onGetService
}: ServiceCardProps) {
  return (
    <Card className={`relative bg-gradient-card border-border/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-glow ${
      isPopular ? 'ring-2 ring-primary/50 shadow-glow' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-gradient-primary border-0 text-primary-foreground px-3 py-1">
            <Star className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 rounded-xl bg-muted/50 w-fit">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="text-center">
          {isFree ? (
            <div className="text-3xl font-bold text-primary">FREE</div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              {originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {originalPrice}
                </span>
              )}
              <span className="text-3xl font-bold text-primary">{price}</span>
            </div>
          )}
        </div>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button 
          onClick={onGetService}
          className="w-full bg-gradient-primary hover:bg-primary/90 text-primary-foreground border-0 font-semibold"
          size="lg"
        >
          {isFree ? 'Get Free Service' : 'Get Service'}
        </Button>
      </CardFooter>
    </Card>
  );
}