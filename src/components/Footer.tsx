import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Final CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              The Founders' Drop
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are limiting the Founders' Circle to <span className="text-accent font-bold">50 Owners</span>. 
              Once these units are gone, the entry price changes. Don't be the person in 10 years saying, 
              "I wish I had."
            </p>
            
            <div className="pt-6">
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
                  Apply via WhatsApp
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Disclaimers */}
          <div className="space-y-6 pt-12 border-t border-border">
            <div className="text-sm text-muted-foreground space-y-2 max-w-3xl mx-auto">
              <p className="italic">
                <strong>Disclaimer:</strong> "Meadows is an independently owned development by the investors. 
                'Wyndham' is a trademark of Wyndham Hotels & Resorts. The property is intended to be operated 
                under the Wyndham brand franchise agreement upon completion, subject to meeting brand standards."
              </p>
              
              <p className="italic">
                Return on Investment projections are illustrative estimates based on current market assumptions. 
                These projections are not guarantees of future performance.
              </p>
            </div>
            
            <div className="pt-6">
              <p className="text-foreground font-semibold text-lg">
                MEADOWS BY WYNDHAM
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                The Property Ladder, Re-Engineered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
