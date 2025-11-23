import { Utensils, ChefHat, Briefcase, Film, Dumbbell, Waves } from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Utensils,
      title: "The Signature Restaurant",
      description: "Farm-to-table gastronomy. This is where the Founders' Supper Club meets nightly.",
    },
    {
      icon: ChefHat,
      title: "The Communal Chef's Kitchen",
      description: "Fully equipped professional equipment. For when you want to host your own dinner party.",
    },
    {
      icon: Briefcase,
      title: "The Co-Working HQ",
      description: "Enterprise fiber optics and ergonomic stations. Stop paying for WeWork. You own the office.",
    },
    {
      icon: Film,
      title: "The Private Cinema",
      description: "A boutique screening room for movie nights, keynotes, or gaming tournaments.",
    },
    {
      icon: Dumbbell,
      title: "The Bio-Hack Gym",
      description: "State-of-the-art equipment facing the forest. Train your body, oxygenate your brain.",
    },
    {
      icon: Waves,
      title: "The Recovery Spa",
      description: "Sauna, Steam Room, and Heated Infinity Pool. Your daily ritual to decompress.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Your Studio is Just the Bedroom.
            </h2>
            <p className="text-xl text-accent font-semibold">
              This is the rest of your house.
            </p>
          </div>
          
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              When you buy into Meadows, you own a 50% stake in the entire building's infrastructure. 
              You own the gym. You own the cinema. You own the spa. This is the power of community ownership.
            </p>
          </div>
          
          {/* Amenities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-xl p-8 space-y-4 hover:border-accent hover:shadow-luxury transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-luxury rounded-lg flex items-center justify-center mb-4">
                  <amenity.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {amenity.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
