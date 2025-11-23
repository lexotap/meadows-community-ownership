import { Home, Droplet, Maximize2, Sparkles } from "lucide-react";
import studioImage from "@/assets/studio-interior.jpg";

const Product = () => {
  const features = [
    {
      icon: Maximize2,
      text: "200 sq ft of masterful efficiency",
    },
    {
      icon: Droplet,
      text: "Spa-like rain shower bathroom",
    },
    {
      icon: Home,
      text: "Floor-to-ceiling windows",
    },
    {
      icon: Sparkles,
      text: "Premium natural finishes",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Smart Luxury. Masterfully Designed.
            </h2>
            <p className="text-xl text-accent font-semibold">
              The $45,000 Founder's Studio
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-luxury border border-accent/20">
                <img 
                  src={studioImage} 
                  alt="Luxury studio interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every 200 sq ft studio is a masterpiece of efficiency, fully furnished to 
                Wyndham's luxury standards. Featuring floor-to-ceiling windows, a spa-like 
                rain shower bathroom, built-in smart storage, and premium natural finishes.
              </p>
              
              {/* Features List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>
              
              {/* Use Cases */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-secondary rounded-lg border border-border">
                  <p className="font-semibold text-accent mb-2">For You</p>
                  <p className="text-sm text-muted-foreground">The Nomad Base</p>
                </div>
                
                <div className="p-6 bg-secondary rounded-lg border border-border">
                  <p className="font-semibold text-accent mb-2">For Guests</p>
                  <p className="text-sm text-muted-foreground">Passive Income</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
