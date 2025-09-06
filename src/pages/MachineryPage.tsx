import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gear, Truck, CaretUp, Wrench, Student } from 'phosphor-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const MachineryPage = () => {
  useEffect(() => {
    document.title = 'Heavy Machinery - Fusion International Trading Company';
    
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

  const machineryServices = [
    {
      icon: Gear,
      title: 'Construction Equipment',
      description: 'Heavy construction machinery for excavation, demolition, and site preparation.',
      features: ['Excavators', 'Bulldozers', 'Loaders', 'Graders']
    },
    {
      icon: CaretUp,
      title: 'Lifting Equipment',
      description: 'Cranes and lifting solutions for construction and industrial applications.',
      features: ['Mobile Cranes', 'Tower Cranes', 'Hoists', 'Forklifts']
    },
    {
      icon: Truck,
      title: 'Transport Vehicles',
      description: 'Heavy-duty trucks and specialized transport equipment for material handling.',
      features: ['Dump Trucks', 'Concrete Mixers', 'Tanker Trucks', 'Flatbed Trailers']
    },
    {
      icon: Wrench,
      title: 'Industrial Machinery',
      description: 'Manufacturing and processing equipment for various industrial applications.',
      features: ['Compressors', 'Generators', 'Pumps', 'Conveyors']
    },
    {
      icon: Gear,
      title: 'Maintenance Services',
      description: 'Comprehensive maintenance and repair services for all heavy machinery.',
      features: ['Preventive Maintenance', 'Emergency Repairs', 'Parts Supply', 'Technical Support']
    },
    {
      icon: Student,
      title: 'Operator Training',
      description: 'Professional training programs for safe and efficient machinery operation.',
      features: ['Safety Training', 'Equipment Operation', 'Certification', 'Refresher Courses']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6">
            <div className="page-header text-center mb-16">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors mb-6"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
              
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gear size={40} className="text-accent" />
              </div>
              
              <h1 className="text-responsive-3xl font-bold mb-6">
                Heavy <span className="hero-text">Machinery</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Rental services for construction and industrial heavy machinery. 
                Complete solutions including equipment, maintenance, and operator training.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {machineryServices.map((service, index) => (
                <div
                  key={service.title}
                  className="feature-card glass rounded-2xl p-8 hover:glow-accent transition-all duration-500 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
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
            <h2 className="text-2xl font-bold mb-4">Need Heavy Machinery?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us for rental quotes and availability
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

export default MachineryPage;