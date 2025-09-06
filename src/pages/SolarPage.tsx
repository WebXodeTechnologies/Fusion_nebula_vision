import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sun, BatteryHigh, Lightning, Gear, Wrench, Leaf } from 'phosphor-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const SolarPage = () => {
  useEffect(() => {
    document.title = 'Solar Solutions - Fusion International Trading Company';
    
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

  const solarServices = [
    {
      icon: Sun,
      title: 'Solar Panels',
      description: 'High-efficiency solar panels for residential, commercial, and industrial applications.',
      features: ['Monocrystalline Panels', 'Polycrystalline Panels', 'Thin-Film Technology', 'Bifacial Panels']
    },
    {
      icon: BatteryHigh,
      title: 'Energy Storage',
      description: 'Advanced battery systems for storing solar energy and ensuring reliable power supply.',
      features: ['Lithium-Ion Batteries', 'Lead-Acid Batteries', 'Grid-Tie Systems', 'Off-Grid Solutions']
    },
    {
      icon: Lightning,
      title: 'Inverters & Controllers',
      description: 'Power conversion and management systems for optimal solar energy utilization.',
      features: ['String Inverters', 'Micro Inverters', 'Charge Controllers', 'Monitoring Systems']
    },
    {
      icon: Gear,
      title: 'Mounting Systems',
      description: 'Robust mounting solutions for secure and efficient solar panel installation.',
      features: ['Roof Mounting', 'Ground Mounting', 'Pole Mounting', 'Tracking Systems']
    },
    {
      icon: Wrench,
      title: 'Installation Services',
      description: 'Professional installation and commissioning services by certified technicians.',
      features: ['Site Assessment', 'System Design', 'Installation', 'Commissioning']
    },
    {
      icon: Leaf,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance programs to ensure optimal system performance.',
      features: ['Preventive Maintenance', 'Performance Monitoring', 'Cleaning Services', 'Technical Support']
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
                <Sun size={40} className="text-primary" />
              </div>
              
              <h1 className="text-responsive-3xl font-bold mb-6">
                Solar <span className="hero-text">Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Solar panel supply and professional installation services. 
                Complete renewable energy solutions for sustainable power generation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {solarServices.map((service, index) => (
                <div
                  key={service.title}
                  className="feature-card glass rounded-2xl p-8 hover:glow-primary transition-all duration-500 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature) => (
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

        {/* Benefits Section */}
        <section className="py-20 bg-muted/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-8">Why Choose Solar Energy?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf size={24} className="text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Environmental Benefits</h3>
                <p className="text-sm text-muted-foreground">Reduce carbon footprint and contribute to a sustainable future</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightning size={24} className="text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Energy Independence</h3>
                <p className="text-sm text-muted-foreground">Generate your own clean energy and reduce utility bills</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun size={24} className="text-yellow-500" />
                </div>
                <h3 className="font-semibold mb-2">Long-term Savings</h3>
                <p className="text-sm text-muted-foreground">Significant cost savings over the system's 25+ year lifespan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Ready to Go Solar?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us for a free consultation and solar system quote
            </p>
            <Link
              to="/#contact"
              className="inline-block px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolarPage;