import { Leaf, Percent, MapPin } from "lucide-react";

const Location = () => {
  const advantages = [
    {
      icon: Leaf,
      title: "Bio-Hack Your Life",
      description: "The Rhodopes are a biological reset button. Rich in negative ions and ancient pine forests, this is the purest air in the Balkans. Lower your cortisol and hack your sleep cycle just by being here.",
    },
    {
      icon: Percent,
      title: "The 10% Tax Haven",
      description: "Why pay 40% tax elsewhere? Bulgaria offers a 10% Flat Tax—the lowest in the EU. Combine that with real estate prices at the 'bottom of the curve,' and you have the smartest geo-arbitrage in Europe.",
    },
    {
      icon: MapPin,
      title: "Alpine to Aegean",
      description: "Minutes from the border and just a 1-hour drive to the Greek coast. You can ski the snowy peaks in the morning and be swimming in the Aegean Sea by the afternoon. Two countries. One hour.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              The Strategic Advantage
            </h2>
            <p className="text-xl text-muted-foreground">
              Undervalued. Connected. Tax-Efficient.
            </p>
          </div>
          
          {/* Advantages Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-xl p-8 space-y-6 hover:shadow-luxury transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-luxury rounded-xl flex items-center justify-center">
                  <advantage.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-8 mt-16 p-8 bg-card rounded-xl border border-accent/20">
            <div className="text-center">
              <p className="text-4xl font-bold text-accent">10%</p>
              <p className="text-sm text-muted-foreground mt-2">Flat Tax Rate</p>
            </div>
            
            <div className="text-center border-l border-r border-border">
              <p className="text-4xl font-bold text-accent">1 Hour</p>
              <p className="text-sm text-muted-foreground mt-2">To Greek Coast</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold text-accent">#1</p>
              <p className="text-sm text-muted-foreground mt-2">Air Quality in Balkans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
