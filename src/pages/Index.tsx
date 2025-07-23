import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import ProgramsSection from '@/components/ProgramsSection';
import MinistriesSection from '@/components/MinistriesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ProgramsSection />
      <MinistriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
