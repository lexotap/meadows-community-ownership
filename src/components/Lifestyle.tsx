import { Users, EyeOff, Wifi } from "lucide-react";
import diningImage from "@/assets/dining-community.jpg";

const Lifestyle = () => {
  const features = [
    {
      icon: Users,
      title: "The Founders' Supper Club",
      subtitle: "Pull up a chair at the long table.",
      description: "Every night, we host communal dinners where co-owners eat together. Connect with strangers who are actually your partners. Whether brainstorming the next tech launch or sharing travel stories, this is high-value networking, family-style.",
    },
    {
      icon: EyeOff,
      title: "The Invisible Mode",
      subtitle: "Social battery drained? We get it.",
      description: "Your suite is fully self-sufficient. With a private kitchenette and stealth room service, you can dine in total privacy while watching the mist roll over the mountains. No one needs to perceive you until you're ready.",
    },
    {
      icon: Wifi,
      title: "The Hub",
      subtitle: "Stop paying for a hot-desk.",
      description: "Your private residents' hub has enterprise-grade fiber optics, meeting pods, and a coffee bar. Work in the morning, hike in the afternoon. This is the new 9-to-5.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Manage Your Social Battery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              50% of the hotel is yours. Choose how you use it.
            </p>
          </div>
          
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Meadows, your studio is just your base. Your ownership stake gives you access 
              to thousands of square feet of luxury amenities.
            </p>
          </div>
          
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-luxury">
            <img 
              src={diningImage} 
              alt="Community dining at Meadows" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-8 space-y-4 hover:border-accent transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-accent font-medium italic">
                  {feature.subtitle}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
