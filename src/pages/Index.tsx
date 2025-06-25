import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCottages from "@/components/FeaturedCottages";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCottages />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
