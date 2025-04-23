
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Services } from "@/components/Services";
import { Capabilities } from "@/components/Capabilities";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050812] overflow-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Capabilities />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
