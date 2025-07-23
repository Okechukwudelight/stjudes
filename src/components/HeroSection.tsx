import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import heroImage from '@/assets/church-hero.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="St Jude's Anglican Church"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          St Jude's <span className="text-accent">Anglican</span> Church
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 font-light">
          A Spirit-filled Family of God
        </p>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
          Welcome to our loving community where faith, fellowship, and service come together 
          in the heart of Omole Phase 1, Lagos.
        </p>

        {/* Location & Service Times */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-primary-foreground/90">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <span>Omole Phase 1, Ikeja, Lagos</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-accent" />
            <span>Sunday Services: 8:00 AM & 10:00 AM</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg"
          >
            Watch Online
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;