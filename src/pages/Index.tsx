import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import About from "@/components/landing/About";
import Works from "@/components/landing/Works";
import Guarantees from "@/components/landing/Guarantees";
import Contacts from "@/components/landing/Contacts";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Works />
        <Guarantees />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
