import { CheckCircle2, XCircle } from "lucide-react";

const Disruption = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              The System is Broken. We Fixed It.
            </h2>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              Most Millennials and Gen Z are told to save $100k for a down payment on a house 
              they can barely afford. The old model is finished. What our parents bought for $50k 
              is now $750k. That door is closed.
            </p>
            
            <p className="text-xl font-semibold text-accent">
              But a new one is open.
            </p>
            
            <p className="text-lg leading-relaxed">
              We cut out the developers, the bank interest, and the middleman markups. We created 
              Meadows as a <span className="text-accent font-semibold">100% Community-Owned</span> project. 
              You pay for the actual asset, not the landlord's lifestyle.
            </p>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              The Market Comparison
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Route */}
              <div className="bg-card border border-border rounded-lg p-8 space-y-6">
                <h4 className="text-xl font-bold text-center text-muted-foreground">
                  THE TRADITIONAL ROUTE
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Entry: $250,000+</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Debt: Mortgage Trap</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Lifestyle: Stuck in one place</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Meadows Route */}
              <div className="bg-card border-2 border-accent rounded-lg p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
                  RECOMMENDED
                </div>
                
                <h4 className="text-xl font-bold text-center text-accent">
                  THE MEADOWS ROUTE
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Entry: $45,000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Debt: 0% Interest</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Lifestyle: Digital Nomad Ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disruption;
