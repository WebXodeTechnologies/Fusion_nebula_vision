import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BrandsSection from '@/components/BrandsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initialize Locomotive Scroll alternative using native smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // Show content with fade animation
    setTimeout(() => {
      setShowContent(true);
      
      // Main content entrance animation
      const tl = gsap.timeline();
      tl.fromTo('main', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
      
    }, 100);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className={showContent ? 'opacity-100' : 'opacity-0'}>
        <HeroSection />
        <AboutSection />
        <BrandsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default Index;