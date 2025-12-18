import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/eva/ChatWidget";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Index;
