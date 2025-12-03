import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkle } from 'phosphor-react';

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo('.hero-title',
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo('.hero-cta',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.3'
    )
    .fromTo('.spline-container',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
      '-=0.8'
    );

    // Floating animation for background elements
    gsap.to('.floating-orb-1', {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to('.floating-orb-2', {
      y: -30,
      x: 20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 1
    });

    gsap.to('.floating-orb-3', {
      y: -15,
      x: -10,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 2
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background - Full Site */}
      {/* Floating Background Elements */}
      <div className="floating-orb-1 absolute top-1/4 left-1/6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="floating-orb-2 absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/15 rounded-full blur-2xl" />
      <div className="floating-orb-3 absolute top-1/2 left-1/3 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-1 gap-12 items-center relative z-10">
        {/* Center Content */}
        <div className="text-center max-w-7xl mx-auto">
          <div className="hero-title mb-6">
            <h1 className="text-responsive-4xl font-bold leading-tight mb-4">
              Welcome to{' '}
              <br />
              <span className="hero-text relative">
                FUSION INTERNATIONAL TRADING AND TECHNICAL SERVICES LLC
                <Sparkle className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-pulse" />
              </span>
              <br />
             
            </h1>
          </div>
          
          <div className="hero-subtitle mb-8">
            <p className="text-responsive-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Transforming businesses through innovative trading solutions, marine services, 
              and cutting-edge technology. Building the future of international commerce.
            </p>
          </div>
          
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:glow-primary transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Quote
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </button>
            <button
              onClick={() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass border border-primary/30 text-foreground rounded-full font-semibold hover:border-primary hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;