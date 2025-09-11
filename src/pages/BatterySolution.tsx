import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft, Battery, Zap, Gauge, Wrench, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const BatterySolution = () => {
  useEffect(() => {
    document.title = 'Battery Solutions - Fusion International Trading Company';
    
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

  const batteryServices = [
    {
      icon: Battery,
      title: 'Industrial Batteries',
      description: 'Reliable power solutions for large-scale industrial and commercial applications.',
      features: ['Lead-Acid Batteries', 'Tubular Batteries', 'High-Capacity Systems', 'UPS & Backup']
    },
    {
      icon: Zap,
      title: 'Renewable Energy Storage',
      description: 'Advanced storage solutions for solar, wind, and hybrid energy systems.',
      features: ['Lithium-Ion Packs', 'Grid-Tie Storage', 'Off-Grid Solutions', 'Hybrid Systems']
    },
    {
      icon: Gauge,
      title: 'Automotive & EV Batteries',
      description: 'High-performance batteries for vehicles and electric mobility solutions.',
      features: ['Car Batteries', 'Two-Wheeler Batteries', 'EV Powerpacks', 'Fast Charging Support']
    },
    {
      icon: Shield,
      title: 'Battery Safety Systems',
      description: 'Comprehensive protection and monitoring solutions for long-lasting performance.',
      features: ['BMS (Battery Management System)', 'Overcharge Protection', 'Thermal Management', 'Smart Monitoring']
    },
    {
      icon: Wrench,
      title: 'Installation & Maintenance',
      description: 'Expert setup and ongoing support to maximize battery efficiency and lifespan.',
      features: ['Site Assessment', 'System Integration', 'Preventive Maintenance', '24/7 Support']
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
                <Battery size={40} className="text-primary" />
              </div>
              
              <h1 className="text-responsive-3xl font-bold mb-6">
                Battery <span className="hero-text">Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Complete range of battery systems for industrial, automotive, and renewable energy applications. 
                Power solutions designed for efficiency, reliability, and sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {batteryServices.map((service) => (
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
            <h2 className="text-2xl font-bold mb-8">Why Choose Our Battery Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={24} className="text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">High Performance</h3>
                <p className="text-sm text-muted-foreground">Advanced technology ensures maximum power output and efficiency.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery size={24} className="text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">Eco-friendly solutions aligned with renewable energy adoption.</p>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={24} className="text-yellow-500" />
                </div>
                <h3 className="font-semibold mb-2">Reliability & Safety</h3>
                <p className="text-sm text-muted-foreground">Built-in safety mechanisms and long-lasting durability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4">Power Your Future Today</h2>
            <p className="text-muted-foreground mb-8">
              Get in touch with us for custom battery solutions tailored to your needs.
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
}

export default BatterySolution;
