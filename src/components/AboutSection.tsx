import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  Globe, 
  Rocket, 
  Lightning, 
  Gear,
  Truck,
  Anchor,
  Sun,
  Wrench,
  Cpu,
  Buildings
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-container',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.about-image',
      { opacity: 0, x: -50, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.out' }
    )
    .fromTo('.about-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo('.skill-icon',
      { opacity: 0, y: 20, scale: 0 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const services = [
    { icon: Anchor, label: 'Marine Parts', color: 'text-primary' },
    { icon: Truck, label: 'Auto Parts', color: 'text-secondary' },
    { icon: Gear, label: 'Heavy Machinery', color: 'text-accent' },
    { icon: Wrench, label: 'Contracting', color: 'text-primary' },
    { icon: Sun, label: 'Solar Solutions', color: 'text-secondary' },
    { icon: Cpu, label: 'Battery Systems', color: 'text-accent' },
    { icon: Buildings, label: 'Building Materials', color: 'text-primary' },
    { icon: Globe, label: 'International Trade', color: 'text-secondary' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="about-container container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image */}
          <div className="about-image relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full glass p-4 hover:glow-primary transition-all duration-500 group">
                <div className="w-full h-full rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    {/* Company Logo */}
                    <img 
                      src="/fusion-company-logo.jpg" 
                      alt="Fusion International Trading Company Logo" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-content text-center lg:text-left">
            <div className="mb-8">
              <span className="text-primary font-semibold text-lg">About Fusion International</span>
              <h2 className="text-responsive-3xl font-bold mt-2 mb-6">
                Building Tomorrow's{' '}
                <span className="hero-text">Trading Solutions</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Fusion International Trading Company is a sister concern of AM Battery Industries, 
                specializing in comprehensive trading and supply solutions across multiple industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From marine spare parts to solar installations, we provide cutting-edge solutions 
                that power businesses forward. Our commitment to excellence and innovation drives 
                us to expand internationally while maintaining the highest quality standards.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {services.map((service, index) => (
                <div
                  key={service.label}
                  className="skill-icon group glass p-4 rounded-xl hover:glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <service.icon 
                    size={32} 
                    className={`${service.color} mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`} 
                  />
                  <p className="text-xs font-medium text-center">{service.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;