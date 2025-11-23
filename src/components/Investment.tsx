import { DollarSign, Calendar, Key, TrendingUp } from "lucide-react";

const Investment = () => {
  const timeline = [
    { quarter: "Q4 2025", event: "Founders' Round Open", price: "$45k Entry" },
    { quarter: "Q2 2026", event: "Ground Breaking", price: "" },
    { quarter: "Q4 2030", event: "Payments Complete", price: "100% Debt-Free" },
    { quarter: "Q1 2032", event: "Possession & Grand Opening", price: "Keys in Hand" },
  ];

  const roiData = [
    { year: "Year 1", rent: "$425", annual: "$4,800", status: "Income Stream Starts" },
    { year: "Year 5", rent: "$515", annual: "$5,820", status: "Growth Phase" },
    { year: "Year 8", rent: "$595", annual: "$6,730", status: "Asset Paid Off via Income" },
    { year: "Year 12", rent: "$722", annual: "$8,170", status: "Pure Profit" },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Your 0% Interest Path to Freedom
            </h2>
            <p className="text-xl text-muted-foreground">
              Lock in today's price. Pick up the keys debt-free.
            </p>
          </div>
          
          {/* Payment Plan */}
          <div className="bg-card border-2 border-accent rounded-2xl p-8 lg:p-12 space-y-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">The Plan</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 bg-background rounded-xl">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-3xl font-bold text-accent">$3,000</h4>
                <p className="text-muted-foreground">Deposit</p>
                <p className="text-sm text-muted-foreground">Reserves your Founder's stake</p>
              </div>
              
              <div className="text-center space-y-4 p-6 bg-background rounded-xl">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-3xl font-bold text-accent">$700/mo</h4>
                <p className="text-muted-foreground">For 60 Months</p>
                <p className="text-sm text-muted-foreground">0% Interest</p>
              </div>
              
              <div className="text-center space-y-4 p-6 bg-background rounded-xl">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Key className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-3xl font-bold text-accent">100%</h4>
                <p className="text-muted-foreground">You Own It</p>
                <p className="text-sm text-muted-foreground">Freehold Title</p>
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">The Strategic Timeline</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 space-y-3 hover:border-accent transition-colors"
                >
                  <div className="text-accent font-bold text-lg">{item.quarter}</div>
                  <div className="text-foreground font-semibold">{item.event}</div>
                  {item.price && (
                    <div className="text-sm text-muted-foreground">{item.price}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* ROI Table */}
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">Projected ROI (Passive Income)</span>
              </div>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                When you aren't using your studio, it enters the Wyndham rental pool to generate income.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-card border border-border rounded-xl overflow-hidden">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-6 py-4 text-left text-foreground font-semibold">Year</th>
                    <th className="px-6 py-4 text-left text-foreground font-semibold">Monthly Rent (Est.)</th>
                    <th className="px-6 py-4 text-left text-foreground font-semibold">Annual Recovery</th>
                    <th className="px-6 py-4 text-left text-foreground font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {roiData.map((row, index) => (
                    <tr key={index} className="border-t border-border hover:bg-secondary/50 transition-colors">
                      <td className="px-6 py-4 text-foreground font-medium">{row.year}</td>
                      <td className="px-6 py-4 text-accent font-semibold">{row.rent}</td>
                      <td className="px-6 py-4 text-accent font-bold">{row.annual}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-xs text-muted-foreground text-center italic">
              *Disclaimer: Return on Investment projections are illustrative estimates based on current market assumptions. 
              These projections are not guarantees of future performance.
            </p>
          </div>
          
          {/* Running Costs */}
          <div className="bg-background border border-accent/20 rounded-xl p-8 space-y-4">
            <h4 className="text-xl font-bold text-foreground">Transparency Check (Running Costs)</h4>
            <p className="text-muted-foreground leading-relaxed">
              Once the hotel opens in 2032, there is a simple Community Service Charge (Estimated ~$150/mo). 
              This covers 24/7 security, fiber optic internet, heating, and maintenance of the pool/spa. 
              You pay one bill; everything just works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
