import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Heart,
  ArrowUp,
  GithubLogo,
  LinkedinLogo,
  Envelope,
  Globe
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer-container',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.footer-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo('.floating-particle',
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    // Floating particles animation
    gsap.to('.floating-particle', {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Marine Spare Parts',
    'Auto Parts Supply',
    'Heavy Machinery Rental',
    'Solar Solutions',
    'Building Materials',
    'Contracting Services'
  ];

  const socialLinks = [
    { icon: GithubLogo, href: '#', label: 'GitHub' },
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: Envelope, href: 'mailto:fusioninternationaltrd@gmail.com', label: 'Email' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="relative bg-background border-t border-primary/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-10" />
      
      {/* Floating Particles */}
      <div className="floating-particle absolute top-20 left-1/4 w-2 h-2 bg-primary rounded-full" />
      <div className="floating-particle absolute top-32 right-1/3 w-1 h-1 bg-secondary rounded-full" />
      <div className="floating-particle absolute bottom-32 left-1/3 w-3 h-3 bg-accent rounded-full" />
      <div className="floating-particle absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-primary rounded-full" />
      
      <div className="footer-container relative z-10">
        {/* Main Footer Content */}
        <div className="footer-content container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold hero-text mb-4">
                  Fusion International
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  A sister concern of AM Battery Industries, driving innovation in international 
                  trading and comprehensive business solutions across multiple industries.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Contact Information</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📧 fusioninternationaltrd@gmail.com</p>
                  <p>📱 +971 527467694 | +971528110250 | 024402608</p>
                  <p>📍 Plot 69 Store #3, MW5 Mussafah Industrial City, Abu Dhabi</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:glow-primary transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon 
                      size={18} 
                      className="text-muted-foreground group-hover:text-primary transition-colors" 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Our Services</h4>
              <ul className="space-y-3">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}>
                    <span className="text-muted-foreground text-sm">
                      {service}
                    </span>
                  </li>
                ))}
                <li>
                  <span className="text-primary text-sm font-medium">
                    + More Services
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>© 2025 Fusion International Developed By</span>
                <Heart size={16} className="text-red-500" />
                <span>Vaishal Malu</span>
              </div>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 glass rounded-lg hover:glow-primary transition-all duration-300 hover:scale-105"
                aria-label="Back to top"
              >
                <span className="text-sm font-medium">Back to Top</span>
                <ArrowUp 
                  size={16} 
                  className="group-hover:-translate-y-1 transition-transform duration-300" 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;