import Hero from "@/components/Hero";
import Disruption from "@/components/Disruption";
import Lifestyle from "@/components/Lifestyle";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import Product from "@/components/Product";
import Investment from "@/components/Investment";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Disruption />
      <Lifestyle />
      <Amenities />
      <Location />
      <Product />
      <Investment />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
