import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';
import Logo  from "../../src/assets/FusionLogo.png"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.fromTo('.mobile-menu', 
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo('.mobile-menu-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.2 }
      );
    } else {
      gsap.to('.mobile-menu', {
        x: '100%',
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'brands' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex">
              <img src={Logo} width={100} height={40} className='object-cover'/>
              <h2 className='text-2xl font-bold hero-text py-10 px-4'>Fusion International</h2>
            </div>
            

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-full hover:glow-primary transition-all duration-300 hover:scale-105"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="mobile-menu fixed right-0 top-0 h-full w-80 glass p-8 pt-20">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="mobile-menu-item text-left text-xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mobile-menu-item mt-8 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full hover:glow-primary transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;