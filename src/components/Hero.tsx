import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.85), rgba(31, 41, 55, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
            MEADOWS BY WYNDHAM
          </h1>
          
          <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">
            The Property Ladder, Re-Engineered.
          </p>
          
          <div className="py-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Don't Buy a Tesla. Buy a Hotel.
            </h2>
          </div>
          
          <div className="space-y-4 text-xl sm:text-2xl">
            <p className="text-foreground">
              Own a Luxury Hotel Suite for{" "}
              <span className="text-accent font-bold">$45,000 USD</span>
            </p>
            <p className="text-muted-foreground">
              No Banks. No Mortgage. 100% Community Owned.
            </p>
          </div>
          
          <div className="pt-8">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
              asChild
            >
              <a 
                href="https://wa.me/447353771750?text=I%20want%20to%20know%20more%20about%20Meadows"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Owning
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
