import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft, Anchor, Boat, Gear, Wrench, CaretCircleRight, Drop } from 'phosphor-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const MarinePartsPage = () => {
  useEffect(() => {
    document.title = 'Marine Spare Parts - Fusion International Trading Company';
    
    const tl = gsap.timeline();
    tl.fromTo('.page-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo('.feature-card',
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.6'
    );
  }, []);

  const marineProducts = [
    {
      icon: CaretCircleRight,
      title: 'Engine Components',
      description: 'Complete range of marine engine parts, pistons, valves, and fuel systems for all vessel types.',
      features: ['Engine Blocks', 'Fuel Injectors', 'Cooling Systems', 'Exhaust Components']
    },
    {
      icon: Boat,
      title: 'Hull & Deck Equipment',
      description: 'Essential equipment for ship hulls, deck hardware, and structural components.',
      features: ['Deck Hardware', 'Hull Fittings', 'Hatches & Covers', 'Ventilation Systems']
    },
    {
      icon: Gear,
      title: 'Propulsion Systems',
      description: 'Propellers, shafts, and transmission components for optimal marine performance.',
      features: ['Propellers', 'Drive Shafts', 'Gearboxes', 'Thrust Bearings']
    },
    {
      icon: Drop,
      title: 'Hydraulic Systems',
      description: 'Marine hydraulic pumps, cylinders, and fluid management systems.',
      features: ['Hydraulic Pumps', 'Cylinders', 'Fluid Lines', 'Control Valves']
    },
    {
      icon: Wrench,
      title: 'Maintenance Tools',
      description: 'Professional tools and equipment for marine vessel maintenance and repair.',
      features: ['Diagnostic Tools', 'Lifting Equipment', 'Safety Gear', 'Measuring Instruments']
    },
    {
      icon: Anchor,
      title: 'Navigation & Safety',
      description: 'Navigation equipment, safety systems, and emergency response gear.',
      features: ['Navigation Systems', 'Safety Equipment', 'Emergency Gear', 'Communication Devices']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6">
            <div className="page-header text-center mb-16">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors mb-6"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
              
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Anchor size={40} className="text-primary" />
              </div>
              
              <h1 className="text-responsive-3xl font-bold mb-6">
                Marine <span className="hero-text">Spare Parts</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Complete range of marine equipment and spare parts for all vessel types. 
                From engines to navigation systems, we supply quality components that keep your fleet operational.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {marineProducts.map((product, index) => (
                <div
                  key={product.title}
                  className="feature-card glass rounded-2xl p-8 hover:glow-primary transition-all duration-500 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <product.icon size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <div className="space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Need Marine Parts?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us for quotes and availability on marine spare parts
            </p>
            <Link
              to="/#contact"
              className="inline-block px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarinePartsPage;