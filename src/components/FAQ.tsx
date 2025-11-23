import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What do I own?",
      answer: "You own the Freehold Title to your unit plus a percentage stake in the entire Community Hotel (pool, spa, gym, restaurant, co-working space).",
    },
    {
      question: "What if I can't finish the payment plan? (Safety Net)",
      answer: "We aren't a bank; we are a community. If life happens and you can't finish your payments, you won't lose everything. We offer options to pause payments, resell your stake to a waiting founder, or downgrade your share. Your equity is protected.",
    },
    {
      question: "Am I locked in forever? (Exit Strategy)",
      answer: "No. Because you own the asset, you can sell your unit at any time—back to the community, to a friend, or on the open market. You control the exit.",
    },
    {
      question: "How does the rental income work?",
      answer: "When you're not using your studio, it enters the Wyndham rental pool. The hotel management handles all bookings, cleaning, and guest services. Income is distributed to owners based on their unit's usage.",
    },
    {
      question: "What are the ongoing costs?",
      answer: "After the hotel opens in 2032, there's a Community Service Charge (estimated ~$150/month) covering 24/7 security, fiber internet, heating, and amenity maintenance. One simple bill for everything.",
    },
    {
      question: "Can I use my studio whenever I want?",
      answer: "Yes! You have priority access to your unit. Simply book it through the owner's portal, and it's removed from the rental pool during your stay. Your home, your schedule.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              FAQ & Safety Net
            </h2>
            <p className="text-xl text-muted-foreground">
              Your questions answered.
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-accent transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
