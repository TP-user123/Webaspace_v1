import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Templates from "@/components/Templates";
import Services from "@/components/Services";
import WhyWebaSpace from "@/components/WhyWebaSpace";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";

export default function Home() {
  return (
    <main className="min-h-screen">

      <SpaceBackground />

      <div className="webaspace-shell">
        <Navbar />
        <Hero />
        <Templates />
        <Services />
        <WhyWebaSpace />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>

    </main>
  );
}