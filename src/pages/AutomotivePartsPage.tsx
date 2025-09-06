import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft, Car, Truck, Gear, Wrench, BatteryHigh, Drop } from 'phosphor-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const AutomotivePartsPage = () => {
  useEffect(() => {
    document.title = 'Automotive Parts - Fusion International Trading Company';
    
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

  const automotiveProducts = [
    {
      icon: Gear,
      title: 'Engine Parts',
      description: 'Comprehensive engine components for cars and trucks from leading manufacturers.',
      features: ['Engine Blocks', 'Pistons & Rings', 'Valves & Springs', 'Gaskets & Seals']
    },
    {
      icon: Car,
      title: 'Transmission Systems',
      description: 'Manual and automatic transmission parts for optimal vehicle performance.',
      features: ['Gearboxes', 'Clutch Systems', 'Torque Converters', 'Drive Shafts']
    },
    {
      icon: BatteryHigh,
      title: 'Electrical Components',
      description: 'Electrical systems, batteries, and electronic components for modern vehicles.',
      features: ['Batteries', 'Alternators', 'Starters', 'Wiring Harnesses']
    },
    {
      icon: Truck,
      title: 'Heavy Truck Parts',
      description: 'Specialized components for commercial trucks and heavy-duty vehicles.',
      features: ['Brake Systems', 'Suspension Parts', 'Axle Components', 'Air Systems']
    },
    {
      icon: Drop,
      title: 'Fluids & Lubricants',
      description: 'High-quality oils, lubricants, and automotive fluids for all applications.',
      features: ['Engine Oils', 'Hydraulic Fluids', 'Brake Fluids', 'Coolants']
    },
    {
      icon: Wrench,
      title: 'Maintenance Tools',
      description: 'Professional automotive tools and equipment for service and repair.',
      features: ['Diagnostic Tools', 'Lifts & Jacks', 'Hand Tools', 'Air Tools']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6">
            <div className="page-header text-center mb-16">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors mb-6"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
              
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car size={40} className="text-secondary" />
              </div>
              
              <h1 className="text-responsive-3xl font-bold mb-6">
                Automotive <span className="hero-text">Parts</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Truck and car spare parts from leading manufacturers worldwide. 
                Quality components for all vehicle types from passenger cars to heavy commercial trucks.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {automotiveProducts.map((product, index) => (
                <div
                  key={product.title}
                  className="feature-card glass rounded-2xl p-8 hover:glow-secondary transition-all duration-500 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                    <product.icon size={32} className="text-secondary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <div className="space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
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
            <h2 className="text-2xl font-bold mb-4">Need Automotive Parts?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us for quotes and availability on automotive spare parts
            </p>
            <Link
              to="/#contact"
              className="inline-block px-8 py-4 bg-gradient-secondary text-secondary-foreground rounded-full font-semibold hover:glow-secondary transition-all duration-300 hover:scale-105"
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

export default AutomotivePartsPage;